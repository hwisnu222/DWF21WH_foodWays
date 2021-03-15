import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Card, Button } from "react-bootstrap";

export default function CardProduct({ img, title, price, product }) {
  // initial variable
  const [state, dispatch] = useContext(CartContext);

  // handle data cart
  function handleCart(item) {
    console.log("data cart", item);
    dispatch({ type: "ADD_CART", payload: item });
    console.log(state.carts.length);
  }

  return (
    <Card className="mb-4 card-product rounded">
      <Card.Img variant="top" src={img} />
      <Card.Body className="px-0 pb-0">
        <Card.Title className="font-weight-bold title-card">{title}</Card.Title>
        <Card.Text className="text-red avenir-font card-price">
          Rp. {price}
        </Card.Text>
        <Button
          onClick={() => {
            handleCart(product);
          }}
          className="btn-yellow font-weight-bold avenir-font"
          block
        >
          Order
        </Button>
      </Card.Body>
    </Card>
  );
}
