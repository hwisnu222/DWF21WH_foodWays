import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// Images
import Burger from "../../assets/icon/burger.svg";
import Startbucks from "../../assets/icon/starbucks.svg";
import Kfc from "../../assets/icon/kfc.svg";
import Jco from "../../assets/icon/jco.svg";
import Geprek from "../../assets/images/geprek.svg";
import NasiGoreng from "../../assets/images/nasigoreng.svg";
import Pecel from "../../assets/images/pecel.svg";
import Kopi from "../../assets/images/kopi.svg";
import Banner from "../../assets/icon/banner.svg";

export default function Home() {
  return (
    <div className="mb-5">
      <div className="yellow p-4">
        <Container className="d-flex justify-content-center">
          <img src={Banner} alt="Banner" />
        </Container>
      </div>

      <Container>
        <h3 className="mt-5 mb-3 font-weight-bold">Popular Restaurant</h3>
        <Row>
          <Col>
            <Card
              body
              as={Link}
              to="/products"
              className=" text-decoration-none"
            >
              <img src={Burger} alt="Category" className="mr-4" />
              <span className="font-weight-bold text-decoration-none text-dark text-category">
                Burger King
              </span>
            </Card>
          </Col>
          <Col>
            <Card
              body
              as={Link}
              to="/products"
              className=" text-decoration-none"
            >
              <img src={Startbucks} alt="Category" className="mr-4" />{" "}
              <span className="font-weight-bold text-decoration-none text-dark text-category">
                Starbucks
              </span>
            </Card>
          </Col>
          <Col>
            <Card
              body
              as={Link}
              to="/products"
              className=" text-decoration-none"
            >
              <img src={Kfc} alt="Category" className="mr-4" />{" "}
              <span className="font-weight-bold text-decoration-none text-dark text-category">
                KFC
              </span>
            </Card>
          </Col>
          <Col>
            <Card
              body
              as={Link}
              to="/products"
              className=" text-decoration-none"
            >
              <img src={Jco} alt="Category" className="mr-4" />{" "}
              <span className="font-weight-bold text-dark text-category">
                Jco
              </span>
            </Card>
          </Col>
        </Row>

        <h3 className="mt-5 mb-3 font-weight-bold">Restaurant Near You</h3>
        <Row>
          <Col>
            <Card className="p-2 border-0">
              <Card.Img variant="top" src={Geprek} />
              <Card.Body>
                <Card.Title className="title-product font-weight-bold">
                  Geprek Bensu
                </Card.Title>
                <Card.Text className="avenir-font">0.2 KM</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-2 border-0">
              <Card.Img variant="top" src={NasiGoreng} />
              <Card.Body>
                <Card.Title className="title-product font-weight-bold">
                  Nasi Goreng Mas Rony
                </Card.Title>
                <Card.Text className="avenir-font">0.6 KM</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-2 border-0">
              <Card.Img variant="top" src={Pecel} />
              <Card.Body>
                <Card.Title className="title-product font-weight-bold">
                  Pecel Ayam Prambanan
                </Card.Title>
                <Card.Text className="avenir-font">0.6 KM</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-2 border-0">
              <Card.Img variant="top" src={Kopi} />
              <Card.Body>
                <Card.Title className="title-product font-weight-bold">
                  Kopi Kenangan
                </Card.Title>
                <Card.Text className="avenir-font">1.6 KM</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
