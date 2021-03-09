import React from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

// images
import Chart from "../assets/icon/chart.svg";
import Avatar from "../assets/icon/avatar.svg";
import FoodWays from "../assets/icon/foodways.svg";
import Logo from "../assets/icon/logo.svg";

export default function HeaderAdmin() {
  return (
    <div>
      <Navbar variant="light" className="yellow">
        <Navbar.Brand href="#home" className="mr-auto">
          <img src={FoodWays} alt="logortype" />
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Form inline>
          <img src={Chart} alt="chart" className="mr-4" />
          <img src={Avatar} alt="avatar" />
        </Form>
      </Navbar>
    </div>
  );
}
