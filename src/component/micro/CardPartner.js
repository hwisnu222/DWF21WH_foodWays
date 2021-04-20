import { useContext, useState } from "react";

import { UserContext } from "../../context/userContext";
import { Link, useHistory } from "react-router-dom";
import { Card, Modal, Button } from "react-bootstrap";

function CardPartner({ image, title, id }) {
  const route = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const { isLogin } = state;

  const redirectPage = () => {
    if (isLogin) {
      route.push(`/products/${id}/${title}`);
    } else {
      setShow(!show);
    }
  };

  const showAlert = () => {
    setShow(!show);
  };

  return (
    <div>
      <Card
        body
        // as={Link}
        // to={`/products/${id}/${title}`}
        onClick={redirectPage}
        className=" text-decoration-none card-hover"
      >
        <img
          src={image}
          alt="Category"
          className="mr-4 image-partner rounded-circle"
        />
        <span className="font-weight-bold text-decoration-none text-dark text-category">
          {title}
        </span>
      </Card>

      <Modal show={show} onHide={showAlert}>
        <Modal.Header className="border-bottom-0" closeButton>
          <Modal.Title className="font-weight-bold">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please login first</Modal.Body>
        <Modal.Footer className="border-top-0">
          <Button className="btn-default brown" onClick={showAlert}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CardPartner;
