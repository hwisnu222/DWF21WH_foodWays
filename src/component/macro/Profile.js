import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { API_BASE } from "../../config/api";

import CardHistory from "../micro/CardHistoryUser";

export default function Profile(props) {
  const { data: userData, loading, error } = useQuery("userCache", async () => {
    const response = await API_BASE.get(`/user`);
    return response;
  });

  const { data: transaction, loading: loadingTransaction } = useQuery(
    "transactionCache",
    async () => {
      const response = await API_BASE.get(`/my-transactions`);
      return response;
    }
  );

  const historyTransaction = transaction?.data?.data?.transaction;

  console.log(transaction?.data?.data);

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h3 className="mb-4 font-weight-bolder">{props.title}</h3>
          <Row className="mt-2">
            <Col md={4}>
              <div className="d-flex flex-column">
                <img
                  src={userData?.data?.data?.users.image}
                  alt="profile"
                  className="mb-2"
                  style={{ width: "10em" }}
                />
                <Button
                  as={Link}
                  to={props.linkEdit}
                  className="btn-default brown product-font"
                >
                  Edit Profile
                </Button>
              </div>
            </Col>
            <Col md={8}>
              <label className="font-weight-bold avenir-font">Name :</label>
              <p className="avenir-font">
                {userData?.data?.data?.users.fullName}
              </p>
              <label className="font-weight-bold avenir-font">Email :</label>
              <p className="avenir-font">{userData?.data?.data?.users.email}</p>
              <label className="font-weight-bold avenir-font">Phone :</label>
              <p className="avenir-font">{userData?.data?.data?.users.phone}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <h3 className="mb-4 font-weight-bold">History {props.history}</h3>
          <div>
            {!loading &&
              historyTransaction?.map((order, index) => (
                <CardHistory
                  orders={order}
                  status={historyTransaction[index].status}
                />
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
