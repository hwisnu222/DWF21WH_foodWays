import { Row, Col, Button, Form, Container, InputGroup } from "react-bootstrap";

export default function AddProductPartner() {
  return (
    <Container>
      <h3 className="mb-4 mt-5">Edit Profile</h3>
      <Form>
        <Form.Group>
          <Row>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Title"
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
            placeholder="Price"
            className="input-text"
          />
        </Form.Group>
        <div className="d-flex justify-contetn-end">
          <Button className="brown ml-auto mt-5 px-5">Save</Button>
        </div>
      </Form>
    </Container>
  );
}