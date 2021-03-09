import React from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

// images
import FoodWays from "../assets/icon/foodways.svg";
import Logo from "../assets/icon/logo.svg";

export default function Header() {
  return (
    <div>
      <Navbar variant="light" className="yellow">
        <Navbar.Brand href="#home" className="mr-auto">
          <img src={FoodWays} alt="logortype" />
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Form inline>
          <Button variant="dark mr-2">Register</Button>
          <Button variant="dark">Login</Button>
        </Form>
      </Navbar>
    </div>
  );
}
