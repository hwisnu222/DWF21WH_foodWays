import React, { useContext } from "react";
import { NavDropdown, Navbar, Form, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { API_BASE } from "../../config/api";
import { useQuery } from "react-query";

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
    localStorage.removeItem("token");
    route.push("/");
  };

  const { data: dataUser, loading, error, refetch } = useQuery(
    "getUser",
    async () => {
      const response = await API_BASE.get("user");
      return response;
    }
  );

  const image = dataUser?.data?.data?.users.image;

  return (
    <div className="sticky-top">
      <Navbar variant="light" className="yellow">
        <Navbar.Brand as={Link} to="/" className="mr-auto">
          <img src={FoodWays} alt="logortype" />
          <img src={Logo} alt="logo" />

          <p>{loading}</p>
        </Navbar.Brand>
        <Form inline>
          <Link to="/cart" className="mr-4">
            <img src={Chart} alt="chart" />
            {carts.length > 0 ? (
              <span class="badge rounded-circle bg-red m-0 avenir-font">
                {carts.length}
              </span>
            ) : (
              <span></span>
            )}
          </Link>
          {loading ? (
            <Spinner animation="grow" />
          ) : (
            <img
              src={image}
              alt="avatar"
              className="avatar rounded-circle border border-5 border-white"
            />
          )}

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
              <img src={User} alt="user" className="icon-menu py-2 mr-3" />{" "}
              <span className="avenir-font font-weight-bold">Profile</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/"
              onClick={handleLogout}
              className="3"
            >
              <img src={Logout} alt="logout" className="icon-menu py-3 mr-3" />
              <span className="avenir-font font-weight-bold">Logout</span>
            </NavDropdown.Item>
          </NavDropdown>
        </Form>
      </Navbar>
    </div>
  );
}
