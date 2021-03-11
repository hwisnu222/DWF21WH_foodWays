import React from "react";
import { Row, Col, Button, Card, Container } from "react-bootstrap";

// Images
import FoodWays from "../../assets/icon/foodways.svg";
import Logo from "../../assets/icon/logo.svg";
import ProfilePhotos from "../../assets/images/profile.svg";

export default function Profile() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h3>My Profile</h3>
          <Row className="mt-2">
            <Col md={4}>
              <div className="d-flex flex-column">
                <img src={ProfilePhotos} alt="profile" className="mb-2" />
                <Button className="brown">Edit Profile</Button>
              </div>
            </Col>
            <Col md={8}>
              <label className="font-weight-bold">Name :</label>
              <p>Andi</p>
              <label className="font-weight-bold">Email :</label>
              <p>andigans@gmail.com</p>
              <label className="font-weight-bold">Phone :</label>
              <p>083896833122</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <h3>History Transaction</h3>
          <Card body className="mt-2 border-0">
            <Row>
              <Col>
                <h6 className="font-weight-bold">Geprek Bensu</h6>
                <p>Saturday, 12 March 2021</p>
                <p className="font-weight-bold">Total : Rp 45.000</p>
              </Col>
              <Col>
                <div className="mb-2">
                  <img src={FoodWays} alt="logortype" />
                  <img src={Logo} alt="logo" />
                </div>
                <span className="status-finished font-weight-bold">
                  Finished
                </span>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
