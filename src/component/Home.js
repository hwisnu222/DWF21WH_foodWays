import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

// Images
import Burger from "../assets/icon/burger.svg";
import Startbucks from "../assets/icon/starbucks.svg";
import Kfc from "../assets/icon/kfc.svg";
import Jco from "../assets/icon/jco.svg";
import Geprek from "../assets/images/geprek.svg";
import NasiGoreng from "../assets/images/nasigoreng.svg";
import Pecel from "../assets/images/pecel.svg";
import Kopi from "../assets/images/kopi.svg";
import Banner from "../assets/icon/banner.svg";

export default function Home() {
  return (
    <div>
      <div className="yellow p-4">
        <Container>
          <img src={Banner} alt="Banner" />
        </Container>
      </div>

      <Container>
        <h3 className="mt-4">Popular Restaurant</h3>
        <Row>
          <Col>
            <Card body className="rounded">
              <img src={Burger} alt="Category" className="mr-4" />
              <span className="font-weight-bold">Burger King</span>
            </Card>
          </Col>
          <Col>
            <Card body>
              <img src={Startbucks} alt="Category" className="mr-4" />{" "}
              <span className="font-weight-bold">Starbucks</span>
            </Card>
          </Col>
          <Col>
            <Card body>
              <img src={Kfc} alt="Category" className="mr-4" />{" "}
              <span className="font-weight-bold">KFC</span>
            </Card>
          </Col>
          <Col>
            <Card body>
              <img src={Jco} alt="Category" className="mr-4" />{" "}
              <span className="font-weight-bold">JCO</span>
            </Card>
          </Col>
        </Row>

        <h3 className="mt-4">Restaurant Near You</h3>
        <Row>
          <Col>
            <Card className="p-2 border-0">
              <Card.Img variant="top" src={Geprek} />
              <Card.Body>
                <Card.Title>Geprek Bensu</Card.Title>
                <Card.Text>0.2 KM</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-2 border-0">
              <Card.Img variant="top" src={NasiGoreng} />
              <Card.Body>
                <Card.Title>Nasi Goreng Mas Rony</Card.Title>
                <Card.Text>0.6 KM</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-2 border-0">
              <Card.Img variant="top" src={Pecel} />
              <Card.Body>
                <Card.Title>Pecel Ayam Prambanan</Card.Title>
                <Card.Text>0.6 KM</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-2 border-0">
              <Card.Img variant="top" src={Kopi} />
              <Card.Body>
                <Card.Title>Kopi Kenangan</Card.Title>
                <Card.Text>1.6 KM</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
