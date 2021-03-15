import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { RoleContext } from "../../context/roleContext";
import { Button, Navbar, Nav, Form, FormControl, Modal } from "react-bootstrap";

// images
import FoodWays from "../../assets/icon/foodways.svg";
import Logo from "../../assets/icon/logo.svg";

export default function Header() {
  // initial state
  const route = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [role, dispatchRole] = useContext(RoleContext);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);

  // handle data and request
  const handleModalLogin = () => {
    setModalLogin(!modalLogin);
  };

  const handleModalRegister = () => {
    setModalRegister(!modalRegister);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    if (email == "user@mail.com" && password == "password") {
      // change state global context
      dispatch({ type: "LOGIN" });
      dispatchRole({ type: "USER" });
      route.push("/user-profile");
    } else if (email == "partner@mail.com" && password == "password") {
      dispatch({ type: "LOGIN" });
      dispatchRole({ type: "PARTNER" });
      route.push("/transaction");
    } else {
      setErrorLogin(!errorLogin);
    }

    // prevent page reload
    e.preventDefault();
  };

  return (
    <div className=" sticky-top">
      <Navbar variant="light" className="yellow">
        <Navbar.Brand as={Link} to="/" className="mr-auto">
          <img src={FoodWays} alt="logortype" />
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Form inline>
          <Button
            variant="dark mr-2"
            className="product-font"
            onClick={handleModalRegister}
          >
            Register
          </Button>
          <Button
            variant="dark"
            className="product-font"
            onClick={handleModalLogin}
          >
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
          <h3 className="text-yellow avenir-font font-weight-bold">Login</h3>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={handleEmail}
                className="input-form-login avenir-font"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePassword}
                className="input-form-login avenir-font"
              />
            </Form.Group>
            <p className="text-danger">
              {errorLogin ? "User or password wrong!" : ""}
            </p>
            <Button className="brown mt-4 avenir-font" block type="submit">
              Login
            </Button>
            <p className="text-center opacity-50 mt-2">
              Don't have an account ? Klik
              <Link
                className="text-decoration-none text-brown font-weight-bold"
                onClick={() => {
                  handleModalLogin();
                  handleModalRegister();
                }}
              >
                Here
              </Link>
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
          <h3 className="text-yellow avenir-font font-weight-bold">Register</h3>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                className="input-form-login avenir-font"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                className="input-form-login avenir-font"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Full Name"
                className="input-form-login avenir-font"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Gender"
                className="input-form-login avenir-font"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Phone"
                className="input-form-login avenir-font"
              />
            </Form.Group>

            <Form.Group
              controlId="exampleForm.ControlSelect1"
              className="input-form-login rounded avenir-font"
            >
              <Form.Control as="select">
                <option>Customer</option>
                <option>Partner</option>
              </Form.Control>
            </Form.Group>
            <Button className="brown mt-4 avenir-font" block>
              Login
            </Button>
            <p className="text-center opacity-50 mt-2">
              Already have an account ? Klik
              <Link
                className="text-decoration-none text-brown font-weight-bold"
                onClick={() => {
                  handleModalLogin();
                  handleModalRegister();
                }}
              >
                Here
              </Link>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
