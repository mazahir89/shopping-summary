import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

interface SubTotalModel {
  price: string;
}

export default class SubTotal extends Component<SubTotalModel> {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Subtotal</Col>
        <Col md={6}>{`$${this.props.price}`}</Col>
      </Row>
    );
  }
}
