import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { API_BASE } from "../../config/api";
import { Row, Col, Button, Form, Container, Alert } from "react-bootstrap";

import AttachFile from "../../assets/icon/file.svg";

export default function AddProductPartner() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [upload, setUpload] = useState("Attach File");
  const [form, setForm] = useState({
    title: "",
    price: "",
    imageFile: null,
  });

  const { title, price, imageFile } = form;

  const addProduct = useMutation(async () => {
    const body = new FormData();

    body.append("title", title);
    body.append("price", price);
    body.append("imageFile", imageFile);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const addResponse = await API_BASE.post("/product", body, config);
    setErrorMessage(addResponse.data.message);
  });

  const onChange = (e) => {
    if (imageFile == null) {
      setUpload("Uploaded");
    }

    const tempForm = { ...form };

    tempForm[e.target.name] =
      e.target.type === "file" ? e.target.files[0] : e.target.value;

    setForm(tempForm);

    setErrorMessage("");
  };

  const addBook = (e) => {
    if (imageFile == null) {
      setErrorMessage("Image not upload");
    }

    addProduct.mutate();
    e.preventDefault();
  };

  return (
    <Container>
      <h3 className="mb-4 mt-5 font-weight-bold">Add Product</h3>
      {errorMessage && <Alert variant="warning">{errorMessage}</Alert>}
      <Form onSubmit={addBook}>
        <Form.Group>
          <Row>
            <Col md={10}>
              <Form.Control
                type="text"
                name="title"
                onChange={(e) => {
                  onChange(e);
                }}
                placeholder="Title"
                className="input-text  avenir-font"
              />
            </Col>
            <Col md={2}>
              <Form>
                <div className="input-upload input-text d-flex justify-content-between align-items-center">
                  <label
                    for="custom-file"
                    className="p-0 avenir-font label-upload mb-0"
                  >
                    {upload}
                  </label>
                  <img src={AttachFile} alt="file" className="attach-file" />
                  <Form.File
                    id="custom-file"
                    label="Attach File"
                    custom
                    name="imageFile"
                    onChange={(e) => {
                      onChange(e);
                    }}
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
            name="price"
            onChange={(e) => {
              onChange(e);
            }}
            placeholder="Price"
            className="input-text avenir-font"
          />
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
    </Container>
  );
}
