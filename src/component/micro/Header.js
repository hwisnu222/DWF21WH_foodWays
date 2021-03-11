import React, { useState } from "react";
import { Button, Navbar, Nav, Form, FormControl, Modal } from "react-bootstrap";

// images
import FoodWays from "../../assets/icon/foodways.svg";
import Logo from "../../assets/icon/logo.svg";

export default function Header() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

  const handleModalLogin = () => {
    setModalLogin(!modalLogin);
  };

  const handleModalRegister = () => {
    setModalRegister(!modalRegister);
  };

  return (
    <div>
      <Navbar variant="light" className="yellow">
        <Navbar.Brand href="#home" className="mr-auto">
          <img src={FoodWays} alt="logortype" />
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Form inline>
          <Button variant="dark mr-2" onClick={handleModalRegister}>
            Register
          </Button>
          <Button variant="dark" onClick={handleModalLogin}>
            Login
          </Button>
        </Form>
      </Navbar>
      {/* modal login*/}
      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalLogin}
        onHide={handleModalLogin}
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
      {/* modal register */}
      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalRegister}
        onHide={handleModalRegister}
      >
        <Modal.Header closeButton className="border-0">
          <h3 className="text-yellow">Register</h3>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Gender" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>Customer</option>
                <option>Partner</option>
              </Form.Control>
            </Form.Group>
            <Button className="brown mt-4" block>
              Login
            </Button>
            <p className="text-center opacity-50 mt-2">
              Already have an account ? Klik Here
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
