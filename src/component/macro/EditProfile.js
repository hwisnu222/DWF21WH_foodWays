import React, { useState, useContext } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Container,
  Modal,
  Alert,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { API_BASE } from "../../config/api";
import { LocationContext } from "../../context/locationContext";

// components
import MapPartner from "../micro/MapPartner";

// image
import AttachFile from "../../assets/icon/file.svg";

export default function EditProfile(props) {
  // state
  const route = useHistory();

  const [locationState, dispatchLocation] = useContext(LocationContext);
  const [modalLocation, setmodalLocation] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: null,
    location: locationState.location,
    imageFile: null,
  });
  const { fullName, email, phone, location, imageFile } = form;

  const [errorMessage, setErrorMessage] = useState(null);
  const [upload, setUpload] = useState("Attach File");

  const handleModal = () => {
    setmodalLocation(!modalLocation);
  };

  const onChange = (e) => {
    const tempForm = { ...form };
    tempForm[e.target.name] =
      e.target.type === "file" ? e.target.files[0] : e.target.value;

    setForm(tempForm);

    if (imageFile !== null) {
      setUpload("Uploaded");
    }
  };

  const updateUser = useMutation(async () => {
    const body = new FormData();

    body.append("fullName", fullName);
    body.append("email", email);
    body.append("phone", phone);
    body.append("location", location);
    body.append("imageFile", imageFile);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const updateResponse = await API_BASE.put("/users", body, config);
    setErrorMessage(updateResponse.data.message);
    console.log(updateResponse.data.message);
  });

  const updateUserProfile = (e) => {
    if (imageFile == null) {
      setErrorMessage("Image not upload");
    } else {
      updateUser.mutate();
    }

    e.preventDefault();
  };

  return (
    <Container>
      <h3 className="mb-4 mt-5 font-weight-bold">Edit Profile {props.title}</h3>

      {errorMessage && <Alert variant="warning">{errorMessage}</Alert>}

      <Form onSubmit={updateUserProfile}>
        <Form.Group>
          <Row>
            <Col md={10}>
              <Form.Control
                type="text"
                name="fullName"
                onChange={(e) => onChange(e)}
                placeholder="Full Name"
                className="input-text avenir-font"
              />
            </Col>
            <Col md={2}>
              <Form>
                <div className="input-upload input-text d-flex justify-content-between align-items-center">
                  <label for="custom-file" className=" avenir-font mb-0">
                    {upload}
                  </label>
                  <img src={AttachFile} alt="file" className="attach-file" />
                  <Form.File
                    id="custom-file"
                    name="imageFile"
                    onChange={(e) => onChange(e)}
                    label="Attach File"
                    custom
                    className="hidden"
                  />
                </div>
              </Form>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="email"
            onChange={(e) => onChange(e)}
            placeholder="Email"
            className="input-text avenir-font"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="phone"
            onChange={(e) => onChange(e)}
            placeholder="Phone"
            className="input-text avenir-font"
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col md={10}>
              <Form.Control
                type="text"
                name="location"
                value={locationState.location}
                onChange={(e) => onChange(e)}
                placeholder="Location"
                className="input-text avenir-font"
              />
            </Col>
            <Col md={2}>
              <Button className="brown block" onClick={handleModal}>
                <span className="mr-1 avenir-font">Select On Map</span>
                <i class="fa fa-map" aria-hidden="true"></i>
              </Button>
            </Col>
          </Row>
        </Form.Group>
        <div className="d-flex justify-contetn-end">
          <Button
            className="btn-default brown ml-auto mt-5 px-5 avenir-font"
            type="submit"
          >
            Save
          </Button>
        </div>
      </Form>
      {/* Modal */}
      <Modal size="lg" show={modalLocation} onHide={handleModal}>
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
