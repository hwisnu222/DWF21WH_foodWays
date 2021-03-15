import React, { useContext } from "react";
import { NavDropdown, Navbar, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/cartContext";
import { RoleContext } from "../../context/roleContext";

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
  const [stateCart, dispatchCarts] = useContext(CartContext);
  const [roleUser, dispatchRole] = useContext(RoleContext);
  const { carts } = stateCart;
  console.log(carts.length);

  // handle logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    dispatchRole({ type: "USER_LOGOUT" });
    route.push("/");
  };
  return (
    <div className="sticky-top">
      <Navbar variant="light" className="yellow">
        <Navbar.Brand as={Link} to="/" className="mr-auto">
          <img src={FoodWays} alt="logortype" />
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Form inline>
          <Link to="/cart" className="mr-4">
            <img src={Chart} alt="chart" />
            {carts.length > 0 ? (
              <span class="badge rounded-circle bg-red m-0">
                {carts.length}
              </span>
            ) : (
              <span></span>
            )}
          </Link>
          <img src={Avatar} alt="avatar" className="avatar" />
          <NavDropdown
            id="collasible-nav-dropdown"
            menuAlign="right"
            id="dropdown-menu-align-right rounded-lg"
          >
            <div className="triangle"></div>
            <NavDropdown.Item
              as={Link}
              to="/user-profile"
              className="item-menu py-2"
            >
              <img src={User} alt="user" className="icon-menu" /> Profile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/" onClick={handleLogout}>
              <img src={Logout} alt="logout" className="icon-menu py-2" />
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Form>
      </Navbar>
    </div>
  );
}
