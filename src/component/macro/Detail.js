import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { API_BASE } from "../../config/api";
import { Row, Col, Container, Button, Alert } from "react-bootstrap";

// Component
import CardProduct from "../micro/CardProduct";

// images
import matchImage from "../../assets/images/nomatch.svg";

// data Product
import { product } from "../../assets/data.js";

export default function Detail() {
  const { idPartner, partner } = useParams();
  const [errorDelete, setErrorDelete] = useState(null);

  const timerErrorDelete = () => {
    setTimeout(() => {
      setErrorDelete(null);
    }, 5000);
  };

  const { data: products, loading, error, refetch } = useQuery(
    "getProducts",
    async () => {
      const response = await API_BASE.get(`products/${idPartner}`);
      return response;
    }
  );

  const deleteProduct = useMutation("deleteProduct", async (id) => {
    const responseDelete = await API_BASE.delete(`/product/${id}`);
    setErrorDelete(responseDelete.data.message);
    timerErrorDelete();
    refetch();
  });

  const productPartner = products?.data?.data?.product;

  return (
    <Container>
      <h3 className="mt-5 mb-4 font-weight-bold">{partner}</h3>
      {errorDelete && <Alert variant="warning">{errorDelete}</Alert>}
      <Row>
        {productPartner != "" ? (
          productPartner?.map((item) => (
            <Col md={3}>
              <CardProduct
                key={item.id}
                id={item.id}
                img={item.image}
                title={item.title}
                price={item.price}
                product={item}
                deleteProductParner={deleteProduct}
              />
            </Col>
          ))
        ) : (
          <div className="w-100 d-flex justify-content-center align-items-center flex-column">
            <h5 className="ml-3 text-brown avenir-font text-center mt-5 mb-3">
              Product tidak tersedia
            </h5>
            <img src={matchImage} alt="match" className="w-25" />

            <Button as={Link} to="/" className="btn-default brown mt-3">
              Back to Home
            </Button>
          </div>
        )}
      </Row>
    </Container>
  );
}
