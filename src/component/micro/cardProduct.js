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
    <Card className="mb-4 p-1">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{ height: "2em" }}>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button
          onClick={() => {
            handleCart(product);
          }}
          className="btn-yellow text-dark"
          block
        >
          Order
        </Button>
      </Card.Body>
    </Card>
  );
}
