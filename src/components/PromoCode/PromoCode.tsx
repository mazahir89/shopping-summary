import React, { Component } from "react";
import {
  Button,
  Collapse,
  Form,
  Row,
  Col,
  FormGroup,
  FormControl
} from "react-bootstrap";

export default class PromoCode extends Component {
  state = {
    open: false,
    value: ""
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? "Apply " : "Hide "}
          promo code
          {this.state.open === false ? " +" : " -"}
        </Button>
      </div>
    );
  }
}
