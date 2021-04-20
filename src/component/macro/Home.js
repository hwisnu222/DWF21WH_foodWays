import React from "react";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { API_BASE } from "../../config/api";

import product from "../../api/restaurantProduct.json";
import CardProductRestaurant from "../../component/micro/CardProductRestaurant";
import CardPartner from "../micro/CardPartner";

// Images
import Banner from "../../assets/icon/banner.svg";

export default function Home() {
  const { data: dataPartner, loading, error } = useQuery(
    "getTransaction",
    async () => {
      const response = await API_BASE.get("partner");
      return response;
    }
  );

  const partners = dataPartner?.data?.data?.users;

  return (
    <div className="mb-5">
      <div className="yellow p-4">
        <Container className="d-flex justify-content-center">
          <img src={Banner} alt="Banner" />
        </Container>
      </div>

      <Container>
        <h3 className="font-weight-bold popular-text">Popular Restaurant</h3>
        <Row>
          {loading ? (
            <Spinner animation="grow" variant="warning" />
          ) : (
            partners?.map((partner) => (
              <Col>
                <CardPartner
                  id={partner.id}
                  image={partner.image}
                  title={partner.fullName}
                />
              </Col>
            ))
          )}
        </Row>

        <h3 className="font-weight-bold restaurant-near-text">
          Restaurant Near You
        </h3>
        <Row>
          {product.map((item) => (
            <Col>
              <CardProductRestaurant
                key={item.id}
                title={item.title}
                image={item.image}
                distance={item.distance}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
