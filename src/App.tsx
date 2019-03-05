import React, { Component } from "react";
import { Container } from "react-bootstrap";

import SubTotal from "./components/Subtotal/SubTotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import "./App.css";
import PromoCode from "./components/PromoCode/PromoCode";

class App extends Component {
  state = {
    total: 100,
    pickupSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0
  };
  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <h2>Shopping Summary</h2>
          <hr />
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode />
        </Container>
      </div>
    );
  }
}

export default App;
