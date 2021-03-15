import React from "react";
import { Row, Col, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Images
import FoodWays from "../../assets/icon/foodways.svg";
import Logo from "../../assets/icon/logo.svg";
import ProfilePhotos from "../../assets/images/profile.svg";

export default function Profile(props) {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h3 className="mb-4 font-weight-bolder">{props.title}</h3>
          <Row className="mt-2">
            <Col md={4}>
              <div className="d-flex flex-column">
                <img src={ProfilePhotos} alt="profile" className="mb-2" />
                <Button
                  as={Link}
                  to={props.linkEdit}
                  className="brown product-font"
                >
                  Edit Profile
                </Button>
              </div>
            </Col>
            <Col md={8}>
              <label className="font-weight-bold avenir-font">Name :</label>
              <p className="avenir-font">Andi</p>
              <label className="font-weight-bold avenir-font">Email :</label>
              <p className="avenir-font">andigans@gmail.com</p>
              <label className="font-weight-bold avenir-font">Phone :</label>
              <p className="avenir-font">083896833122</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <h3 className="mb-4">History {props.history}</h3>
          <Card body className="mt-2 border-0">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="font-weight-bold">Geprek Bensu</h5>
                <p className="avenir-font">Saturday, 12 March 2021</p>
                <p className="font-weight-bold avenir-font text-red">
                  Total : Rp 45.000
                </p>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <div className="mb-2">
                  <img src={FoodWays} alt="logortype" />
                  <img src={Logo} alt="logo" />
                </div>
                <span className="status-finished font-weight-bold avenir-font">
                  Finished
                </span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
