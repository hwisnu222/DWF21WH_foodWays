import { Navbar, Form } from "react-bootstrap";

//images
import Avatar from "../../assets/icon/avatar.svg";
import FoodWays from "../../assets/icon/foodways.svg";
import Logo from "../../assets/icon/logo.svg";

export default function HeaderPartner() {
  return (
    <Navbar variant="light" className="yellow">
      <Navbar.Brand href="#home" className="mr-auto">
        <img src={FoodWays} alt="logortype" />
        <img src={Logo} alt="logo" />
      </Navbar.Brand>
      <Form inline>
        <img src={Avatar} alt="avatar" />
      </Form>
    </Navbar>
  );
}
