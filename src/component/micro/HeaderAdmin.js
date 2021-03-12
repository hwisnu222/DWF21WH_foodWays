import React from "react";
import { NavDropdown, Navbar, Form } from "react-bootstrap";

// images
import Avatar from "../../assets/icon/avatar.svg";
import FoodWays from "../../assets/icon/foodways.svg";
import Logo from "../../assets/icon/logo.svg";
import Chart from "../../assets/icon/chart.svg";
import User from "../../assets/icon/user.svg";
import Logout from "../../assets/icon/logout.svg";

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
          <NavDropdown
            id="collasible-nav-dropdown"
            menuAlign="right"
            id="dropdown-menu-align-right"
          >
            <div className="triangle"></div>
            <NavDropdown.Item href="#action/3.1" className="item-menu">
              <img src={User} alt="user" className="icon-menu" /> Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <img src={Logout} alt="logout" className="icon-menu" />
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Form>
      </Navbar>
    </div>
  );
}
