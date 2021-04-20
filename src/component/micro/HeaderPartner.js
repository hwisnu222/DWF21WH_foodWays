import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { API_BASE } from "../../config/api";
import { Navbar, Form, NavDropdown, Spinner } from "react-bootstrap";

import { RoleContext } from "../../context/roleContext";
import { UserContext } from "../../context/userContext";

//images
import FoodWays from "../../assets/icon/foodways.svg";
import Logo from "../../assets/icon/logo.svg";
import User from "../../assets/icon/user.svg";
import Logout from "../../assets/icon/logout.svg";
import AddProduct from "../../assets/icon/addproduct.svg";

export default function HeaderPartner() {
  const route = useHistory();

  const [state, dispatch] = useContext(UserContext);
  const [roleUser, dispatchRole] = useContext(RoleContext);

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

  const image = dataUser?.data?.data?.users?.image;

  return (
    <Navbar variant="light" className="yellow">
      <Navbar.Brand as={Link} to="/" className="mr-auto">
        <img src={FoodWays} alt="logortype" />
        <img src={Logo} alt="logo" />
      </Navbar.Brand>
      <Form inline>
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
          id="dropdown-menu-align-right"
        >
          <div className="triangle"></div>
          <NavDropdown.Item as={Link} to="/partner-profile" className="py-3">
            <img src={User} alt="user" className="icon-menu mr-3" />{" "}
            <span className="avenir-font font-weight-bold">Profile</span>
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/add-product" className="py-3">
            <img
              src={AddProduct}
              alt="user"
              className="icon-menu avenir-font mr-3"
            />{" "}
            <span className="avenir-font font-weight-bold">Add Product</span>
          </NavDropdown.Item>
          <NavDropdown.Item
            as={Link}
            to="/transaction"
            className="item-menu py-3"
          >
            <img src={Logo} alt="user" className="icon-menu avenir-font mr-3" />
            <span className="avenir-font font-weight-bold">Transaction</span>
          </NavDropdown.Item>
          <NavDropdown.Item
            as={Link}
            to="/"
            onClick={handleLogout}
            className="py-4"
          >
            <img src={Logout} alt="logout" className="icon-menu avenir-font" />
            <span className="avenir-font font-weight-bold">Logout</span>
          </NavDropdown.Item>
        </NavDropdown>
      </Form>
    </Navbar>
  );
}
