import { Card, Button } from "react-bootstrap";

export default function cardProduct({ img, title, price }) {
  return (
    <Card className="mb-4 p-1">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{ height: "2em" }}>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button className="btn-yellow text-dark" block>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
}
