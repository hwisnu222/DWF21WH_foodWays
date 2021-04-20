import { Card } from "react-bootstrap";
export default function CardProductRestaturant({ image, title, distance }) {
  return (
    <Card className="p-2 border-0 card-hover pointer">
      <Card.Img variant="top" src={image} />
      <Card.Body className="px-0">
        <Card.Title className="title-product font-weight-bold">
          {title}
        </Card.Title>
        <Card.Text className="avenir-font">{distance}</Card.Text>
      </Card.Body>
    </Card>
  );
}
