import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Buttons extends Component {
  render() {
    return (
      <Button name={this.props.name}
        onClick={this.props.onClick}>
        {this.props.name}
      </Button>
    );
  }
}


export default Buttons;