import React, { useState } from "react";
import { Row, Col, Button, Form, Container, Modal } from "react-bootstrap";

// components
import MapPartner from "../micro/MapPartner";

export default function EditProfile(props) {
  // state
  const [modalLocation, setmodalLocation] = useState(false);

  const handleModal = () => {
    setmodalLocation(!modalLocation);
  };
  return (
    <Container>
      <h3 className="mb-4 mt-5">Edit Profile {props.title}</h3>
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
              <Button className="brown block" onClick={handleModal}>
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
      {/* Modal */}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalLocation}
        onHide={handleModal}
      >
        <div className="d-flex justify-content-end">
          <i
            onClick={handleModal}
            className="fa fa-times m-2 close-map"
            aria-hidden="true"
          ></i>
        </div>
        <Modal.Body closeButton>
          <MapPartner />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
