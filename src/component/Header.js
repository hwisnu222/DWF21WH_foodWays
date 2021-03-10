import React, { useState } from "react";
import { Button, Navbar, Nav, Form, FormControl, Modal } from "react-bootstrap";

// images
import FoodWays from "../assets/icon/foodways.svg";
import Logo from "../assets/icon/logo.svg";

export default function Header() {
  const [modalShow, setModalShow] = useState(false);

  const handleModal = () => {
    setModalShow(!modalShow);
  };

  return (
    <div>
      <Navbar variant="light" className="yellow">
        <Navbar.Brand href="#home" className="mr-auto">
          <img src={FoodWays} alt="logortype" />
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Form inline>
          <Button variant="dark mr-2" onClick={handleModal}>
            Register
          </Button>
          <Button variant="dark">Login</Button>
        </Form>
      </Navbar>
      {/* modal */}
      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={handleModal}
      >
        <Modal.Header closeButton className="border-0">
          <h3 className="text-yellow">Login</h3>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="brown mt-4" block>
              Login
            </Button>
            <p className="text-center opacity-50 mt-2">
              Don't have an account ? Klik Here
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
