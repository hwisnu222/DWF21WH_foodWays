import React from "react";
import { Row, Col, Button, Form, Container, InputGroup } from "react-bootstrap";

export default function EditProfile() {
  return (
    <Container>
      <h3 className="mb-4 mt-5">Edit Profile</h3>
      <Form>
        <Form.Group>
          <Row>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Full Name"
                className="input-text"
              />
            </Col>
            <Col md={3}>
              <Form>
                <Form.File id="custom-file" label="Attach File" custom />
              </Form>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Email"
            className="input-text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Phone"
            className="input-text"
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col md={10}>
              <Form.Control
                type="text"
                placeholder="Location"
                className="input-text"
              />
            </Col>
            <Col md={2}>
              <Button className="brown block">
                <span className="mr-1">Select On Map</span>
                <i class="fa fa-map" aria-hidden="true"></i>
              </Button>
            </Col>
          </Row>
        </Form.Group>
        <div className="d-flex justify-contetn-end">
          <Button className="brown ml-auto mt-5 px-5">Save</Button>
        </div>
      </Form>
    </Container>
  );
}
