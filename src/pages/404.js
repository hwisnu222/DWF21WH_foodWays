import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

//images
import Logo from "../assets/icon/logo.svg";

export default function NotFound() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <img src={Logo} alt="logo" style={{ width: "8em" }} className="mb-2" />
      <h2>Page Not Found</h2>
      <Button as={Link} to="/" className="brown mt-4">
        Back to Home
      </Button>
    </Container>
  );
}
