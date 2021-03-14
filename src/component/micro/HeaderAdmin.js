import React, { useContext } from "react";
import { NavDropdown, Navbar, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../context/userContext";

// images
import Avatar from "../../assets/icon/avatar.svg";
import FoodWays from "../../assets/icon/foodways.svg";
import Logo from "../../assets/icon/logo.svg";
import Chart from "../../assets/icon/chart.svg";
import User from "../../assets/icon/user.svg";
import Logout from "../../assets/icon/logout.svg";

export default function HeaderAdmin() {
  const route = useHistory();
  const [state, dispatch] = useContext(UserContext);

  // handle logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    route.push("/");
  };
  return (
    <div>
      <Navbar variant="light" className="yellow">
        <Navbar.Brand as={Link} to="/" className="mr-auto">
          <img src={FoodWays} alt="logortype" />
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Form inline>
          <Link to="/cart">
            <img src={Chart} alt="chart" className="mr-4" />
          </Link>
          <img src={Avatar} alt="avatar" />
          <NavDropdown
            id="collasible-nav-dropdown"
            menuAlign="right"
            id="dropdown-menu-align-right"
          >
            <div className="triangle"></div>
            <NavDropdown.Item
              as={Link}
              to="/user-profile"
              className="item-menu"
            >
              <img src={User} alt="user" className="icon-menu" /> Profile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/">
              <img src={Logout} alt="logout" className="icon-menu" />
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Form>
      </Navbar>
    </div>
  );
}
