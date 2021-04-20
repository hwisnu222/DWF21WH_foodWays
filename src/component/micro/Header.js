import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { RoleContext } from "../../context/roleContext";
import { Button, Navbar, Nav, Form, FormControl, Modal } from "react-bootstrap";

import { useQuery, useMutation, refetch } from "react-query";
import { API_BASE } from "../../config/api";

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
  const [errorLogin, setErrorLogin] = useState("");
  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
    fullName: "",
    gender: "",
    phone: "",
    role: "user",
  });

  const {
    email: emailRegister,
    password: passwordRegister,
    fullName,
    gender,
    phone,
  } = formRegister;

  // handle data and request
  const handleModalLogin = () => {
    setModalLogin(!modalLogin);
  };

  const handleModalRegister = () => {
    setModalRegister(!modalRegister);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrorLogin("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrorLogin(false);
  };

  const onChangeRegister = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };

  // login with mutate
  const loginUser = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email,
      password,
    });

    const loginResponse = await API_BASE.post("/login", body, config);

    const { status } = loginResponse.data;

    if (status == "failed") {
      return setErrorLogin(loginResponse.data.message);
    }

    if (status == "success") {
      const { role } = loginResponse.data.data.user;
      const { token } = loginResponse.data.data;

      // change state global context
      dispatch({ type: "LOGIN" });

      // check role user
      if (role == "user") {
        dispatchRole({ type: "USER" });
        localStorage.setItem("token", token);
        route.push("/user-profile");
      } else if (role == "partner") {
        dispatchRole({ type: "PARTNER" });
        localStorage.setItem("token", token);
        route.push("/transaction");
      }
    }
  });

  const registerUser = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(formRegister);

    const responseRegister = await API_BASE.post("/register", body, config);
    console.log(responseRegister.data.data);

    // login after register if success
    const { status } = responseRegister.data;

    if (status == "failed") {
      return setErrorLogin(responseRegister.data.message);
    }

    if (status == "success") {
      const { role } = responseRegister.data.data.user;
      const { token } = responseRegister.data.data.user;

      // change state global context
      dispatch({ type: "LOGIN" });

      // check role user
      if (role == "user") {
        dispatchRole({ type: "USER" });
        localStorage.setItem("token", token);
        route.push("/user-profile");
      } else if (role == "partner") {
        dispatchRole({ type: "PARTNER" });
        localStorage.setItem("token", token);
        route.push("/transaction");
      }
    }

    setModalRegister(!modalRegister);
  });

  const handleLogin = async (e) => {
    loginUser.mutate();

    // prevent page reload
    e.preventDefault();
  };

  const handleRegister = (e) => {
    registerUser.mutate();

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
            {errorLogin != "" ||
              (loginUser.error?.response?.data && (
                <p className="text-danger">
                  {loginUser.error?.response?.data?.data}
                  {errorLogin}
                </p>
              ))}
            {errorLogin != "" && <p className="text-danger">{errorLogin}</p>}
            <Button
              className="brown mt-4 avenir-font"
              block
              type="submit"
              disabled={email && password ? false : true}
            >
              Login
            </Button>
            <p className="text-center opacity-50 mt-2">
              Don't have an account ? Klik
              <Link
                className="text-decoration-none text-brown font-weight-bold pl-1 link-form"
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
          <Form onSubmit={handleRegister}>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                className="input-form-login avenir-font"
                onChange={(e) => {
                  onChangeRegister(e);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                className="input-form-login avenir-font"
                onChange={(e) => {
                  onChangeRegister(e);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input-form-login avenir-font"
                onChange={(e) => {
                  onChangeRegister(e);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="gender"
                placeholder="Gender"
                className="input-form-login avenir-font"
                onChange={(e) => {
                  onChangeRegister(e);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone"
                className="input-form-login avenir-font"
                onChange={(e) => {
                  onChangeRegister(e);
                }}
              />
            </Form.Group>

            <Form.Group
              controlId="exampleForm.ControlSelect1"
              className="input-form-login rounded avenir-font"
            >
              <Form.Control
                as="select"
                name="role"
                onChange={(e) => {
                  onChangeRegister(e);
                }}
              >
                <option value="user">Customer</option>
                <option value="partner">Partner</option>
              </Form.Control>
            </Form.Group>
            <Button
              className="brown mt-4 avenir-font"
              block
              type="submit"
              disabled={
                emailRegister &&
                passwordRegister &&
                fullName &&
                gender &&
                phone &&
                role
                  ? false
                  : true
              }
            >
              Login
            </Button>
            <p className="text-center opacity-50 mt-2">
              Already have an account ? Klik
              <Link
                className="text-decoration-none text-brown font-weight-bold ml-1 link-form"
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
