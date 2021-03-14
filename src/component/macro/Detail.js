import React, { useContext } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

// Component
import CardProduct from "../micro/CardProduct";

// data Product
import { product } from "../../assets/data.js";

export default function Detail() {
  return (
    <Container>
      <h3 className="mt-5 mb-4">Geprek Bensu</h3>
      <Row>
        {product.map((item) => (
          <Col md={3}>
            <CardProduct
              key={item.id}
              img={item.img}
              title={item.name}
              price={item.price}
              product={item}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
