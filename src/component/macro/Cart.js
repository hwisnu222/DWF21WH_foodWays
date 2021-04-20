import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const ongkirPrice = carts.length > 0 ? 10000 : 0;

  useEffect(() => {
    dispatch({ type: "LOGIN" });
  }, []);

  // state
  const [modalLocation, setModalLocation] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  // function
  const removeAllCart = () => {
    dispatchCart({ type: "REMOVE_ALL_CART" });
  };
  const handleClose = () => setModalLocation(!modalLocation);
  const handleSuccess = () => {
    setModalSuccess(!modalSuccess);
    removeAllCart();
  };

  // total price
  const totalPrice = carts.reduce((acc, num) => {
    return acc + num.price;
  }, 0);
  const totalPriceProduct = totalPrice + ongkirPrice;

  return (
    <Container className="pb-5">
      <h3 className="mb-4 mt-5">Geprek Bensu</h3>
      <Form.Group>
        <Form.Label className="avenir-font">Delivery</Form.Label>
        <div className="d-flex">
          <div className="flex-grow-1 mr-2">
            <Form.Control
              type="text"
              placeholder="Location"
              className="input-text avenir-font"
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
      <label className="mt-4 avenir-font">Review Your Order</label>
      <Row>
        <Col md="8">
          {carts.length == 0 ? (
            <div className="text-center mt-4">
              <p classname="mt-4">Cart kamu kosong</p>
              <Button as={Link} to="/" className="brown">
                Back to Home
              </Button>
            </div>
          ) : (
            <p></p>
          )}

          {carts.map((item) => (
            <div>
              <hr />
              <div className="d-flex">
                <div>
                  <img src={item.image} alt="chart" className="mr-3" />
                </div>
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <p className="font-weight-bold">{item.title}</p>
                    <p>
                      <span className="font-weight-bolder decrement ">-</span>
                      <span className="total-product avenir-font">1</span>
                      <span className="font-weight-bolder decrement ">+</span>
                    </p>
                  </div>
                  <div>
                    <p className="avenir-font text-red cart-price">
                      Rp. {item.price}
                    </p>
                    <i
                      className="fa fa-trash-o"
                      style={{ cursor: "pointer" }}
                      aria-hidden="true"
                    ></i>
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
              <p className="avenir-font">Subtotal</p>
              <p className="avenir-font">Qty</p>
              <p className="avenir-font">Ongkir</p>
            </div>
            <div className="text-right">
              <p className="text-red avenir-font">Rp.{totalPrice}</p>
              <p>{carts.length}</p>
              <p className="text-red avenir-font">Rp.{ongkirPrice}</p>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <p className="text-red font-weight-bold avenir-font">Total</p>
            </div>
            <div>
              <p className="text-red font-weight-bold avenir-font">
                Rp. {totalPriceProduct}
              </p>
            </div>
          </div>
          <div className="d-flex justify-contetn-end">
            {carts.length > 0 ? (
              <Button
                className="brown ml-auto mt-5 px-5 avenir-font"
                onClick={handleSuccess}
              >
                Order
              </Button>
            ) : (
              <span></span>
            )}
          </div>
        </Col>
      </Row>

      {/* Modal */}
      <Modal size="lg" show={modalLocation} onHide={handleClose}>
        <div className="d-flex justify-content-end">
          <i
            onClick={handleClose}
            className="fa fa-times m-2 close-map"
            aria-hidden="true"
          ></i>
        </div>
        <Modal.Body>
          <MapPartner />
        </Modal.Body>
      </Modal>

      {/* Modal */}
      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalSuccess}
        onHide={handleSuccess}
        className="modal-map"
      >
        <Modal.Body>
          <p>Makanan berhasil dipesan.</p>
          <p>Kami akan segera mengantarnya. Terima Kasih</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="brown" onClick={handleSuccess}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
