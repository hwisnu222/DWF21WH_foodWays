import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { RoleContext } from "../../context/roleContext";
import { Card, Button, Modal } from "react-bootstrap";

export default function CardProduct({
  id,
  img,
  title,
  price,
  product,
  deleteProductParner,
}) {
  // initial variable
  const [state, dispatch] = useContext(CartContext);
  const [roleState, dispatchRole] = useContext(RoleContext);

  const [modal, setModal] = useState(false);

  const modalDelete = () => {
    setModal(!modal);
    console.log(modal);
  };

  const deleteProductDetail = () => {
    deleteProductParner.mutate(id);
    setModal(!modal);
  };

  // handle data cart
  function handleCart(item) {
    dispatch({ type: "ADD_CART", payload: item });
  }

  return (
    <div>
      <Card className="mb-4 card-product rounded card-hover">
        <Card.Img variant="top" src={img} />
        <Card.Body className="px-0 pb-0">
          <Card.Title className="font-weight-bold title-card">
            {title}
          </Card.Title>
          <Card.Text className="text-red avenir-font card-price">
            Rp. {price}
          </Card.Text>
          {roleState.role == "user" || roleState.role == "" ? (
            <Button
              onClick={() => {
                handleCart(product);
              }}
              className="btn-yellow font-weight-bold avenir-font"
              block
            >
              Order
            </Button>
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <Button
                className="font-weight-bold avenir-font mr-2"
                variant="outline-danger"
                block
                onClick={modalDelete}
              >
                Delete
              </Button>
              <Button
                className="btn-yellow font-weight-bold avenir-font mt-0"
                block
              >
                Edit
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>

      <Modal
        show={modal}
        onHide={modalDelete}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you want delete product?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-danger"
            className="text-red"
            onClick={modalDelete}
          >
            Cancel
          </Button>
          <Button className="brown" onClick={deleteProductDetail}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
