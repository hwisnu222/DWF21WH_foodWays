import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Form, NavDropdown } from "react-bootstrap";
import { UserContext } from "../../context/userContext";

//images
import Avatar from "../../assets/icon/avatar.svg";
import FoodWays from "../../assets/icon/foodways.svg";
import Logo from "../../assets/icon/logo.svg";
import User from "../../assets/icon/user.svg";
import Logout from "../../assets/icon/logout.svg";
import AddProduct from "../../assets/icon/addproduct.svg";

export default function HeaderPartner() {
  const route = useHistory();
  const [state, dispatch] = useContext(UserContext);

  // handle logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    route.push("/");
  };

  return (
    <Navbar variant="light" className="yellow">
      <Navbar.Brand as={Link} to="/" className="mr-auto">
        <img src={FoodWays} alt="logortype" />
        <img src={Logo} alt="logo" />
      </Navbar.Brand>
      <Form inline>
        <img src={Avatar} alt="avatar" />
        <NavDropdown
          id="collasible-nav-dropdown"
          menuAlign="right"
          id="dropdown-menu-align-right"
        >
          <div className="triangle"></div>
          <NavDropdown.Item as={Link} to="/partner-profile">
            <img src={User} alt="user" className="icon-menu" /> Profile
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/add-product">
            <img src={AddProduct} alt="user" className="icon-menu" /> Add
            Product
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/transaction" className="item-menu">
            <img src={AddProduct} alt="user" className="icon-menu" />{" "}
            Transaction
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/" onClick={handleLogout}>
            <img src={Logout} alt="logout" className="icon-menu" />
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Form>
    </Navbar>
  );
}
