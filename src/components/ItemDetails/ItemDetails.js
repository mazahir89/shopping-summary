import React, { Component } from "react";
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="Link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide `} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <img
                width={100}
                height={100}
                alt="thumbnail"
                src="https://i5.walmartimages.com/asr/9898814f-8aea-47d7-a599-d80d0ba11781_1.308a8bc87d4ec569fd212318bfcb7aae.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
              />
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
