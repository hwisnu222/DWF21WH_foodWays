import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Form, Col, Button, Modal } from "react-bootstrap";

// context
import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/cartContext";

// components
import MapPartner from "../micro/MapPartner";

// images
import Geprek from "../../assets/images/geprek-chart.svg";

export default function Cart() {
  // initail context with argument
  const [state, dispatch] = useContext(UserContext);
  const [stateCart, dispatchCart] = useContext(CartContext);
  const { carts } = stateCart;

  useEffect(() => {
    dispatch({ type: "LOGIN" });
    console.log("data state", state);
    console.log("data state", stateCart);
  }, []);

  // state
  const [modalLocation, setModalLocation] = useState(false);

  // function
  const handleClose = () => setModalLocation(!modalLocation);

  return (
    <Container className="pb-5">
      <h3 className="mb-4 mt-5">Geprek Bensu</h3>
      <Form.Group>
        <Form.Label>Delivery</Form.Label>
        <div className="d-flex">
          <div className="flex-grow-1 mr-2">
            <Form.Control
              type="text"
              placeholder="Location"
              className="input-text"
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
          {carts.map((item) => (
            <div>
              <hr />
              <div className="d-flex">
                <div>
                  <img src={item.img} alt="chart" className="mr-3" />
                </div>
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <p className="font-weight-bold">{item.name}</p>
                    <p>
                      <span className="font-weight-bolder decrement">-</span>
                      <span className="total-product">1</span>
                      <span className="font-weight-bolder decrement">+</span>
                    </p>
                  </div>
                  <div>
                    <p>{item.price}</p>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
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
          <div className="d-flex justify-contetn-end">
            <Button className="brown ml-auto mt-5 px-5">Order</Button>
          </div>
        </Col>
      </Row>

      {/* Modal */}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalLocation}
        onHide={handleClose}
      >
        <Modal.Body>
          <MapPartner />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
