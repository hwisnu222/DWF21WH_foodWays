import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

// Component
import Detail from "../component/macro/Detail";
import HeaderAdmin from "../component/micro/HeaderAdmin";

export default function DetailProduct() {
  return (
    <div>
      <HeaderAdmin />
      <Detail />
    </div>
  );
}
