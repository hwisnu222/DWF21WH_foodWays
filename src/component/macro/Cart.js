import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Form, Col, Button, Modal } from "react-bootstrap";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

// images
import Geprek from "../../assets/images/geprek-chart.svg";

mapboxgl.accessToken = "API_KEY";

export default function Cart() {
  // state
  const [modalLocation, setModalLocation] = useState(false);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [maps, setMaps] = useState(null);
  const [address, setAddress] = useState("Jakarta");

  // function
  const handleClose = () => setModalLocation(!modalLocation);
  const mapContainer = useRef(null);

  // hooks
  // useEffect(() => {
  //   const map = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/streets-v11",
  //     center: [lng, lat],
  //     zoom: zoom,
  //   });

  //   map.on("move", () => {
  //     setLng(map.getCenter().lng.toFixed(4));
  //     setLat(map.getCenter().lat.toFixed(4));
  //     setZoom(map.getZoom().toFixed(2));
  //   });

  //   return () => map.remove();
  // }, []);

  useEffect(() => {
    if (mapContainer.current && !maps) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
      });
      setMaps(maps);
    }
  }, [mapContainer, maps]);

  return (
    <Container>
      <h3 className="mb-4 mt-5">Geprek Bensu</h3>
      <Form.Group>
        <Form.Label>Delivery</Form.Label>
        <div className="d-flex">
          <div className="flex-grow-1 mr-2">
            <Form.Control
              type="text"
              placeholder="Location"
              className="input-text"
              value={address}
            />
          </div>
          <div>
            <Button className="brown block" onClick={handleClose}>
              <span className="mr-1">Select On Map</span>
              <i class="fa fa-map" aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      </Form.Group>
      <label className="mt-4 font-weight-bold">Review Your Order</label>
      <Row>
        <Col md="8">
          <hr />
          <div className="d-flex">
            <div>
              <img src={Geprek} alt="chart" className="mr-3" />
            </div>
            <div className="d-flex justify-content-between w-100">
              <div>
                <p className="font-weight-bold">Paket Geprek</p>
                <p>
                  <span className="font-weight-bolder decrement">-</span>
                  <span className="total-product">1</span>
                  <span className="font-weight-bolder decrement">+</span>
                </p>
              </div>
              <div>
                <p>Rp.15.000</p>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <hr />
        </Col>
        <Col md="4">
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <p>Subtotal</p>
              <p>Qty</p>
              <p>Ongkir</p>
            </div>
            <div className="text-right">
              <p className="text-red">Rp. 35.000</p>
              <p>2</p>
              <p className="text-red">Rp.10.000</p>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <p className="text-red font-weight-bold">Total</p>
            </div>
            <div>
              <p className="text-red font-weight-bold">Rp. 45.000</p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="d-flex justify-contetn-end">
        <Button className="brown ml-auto mt-5 px-5">Order</Button>
      </div>

      {/* Modal */}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalLocation}
        onHide={handleClose}
      >
        <Modal.Body>
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div className="map-container" ref={mapContainer} />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
