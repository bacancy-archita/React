import React, { Component } from 'react'
import { InputGroup, Input } from 'reactstrap'

class Radio extends Component {
  render() {
    return (
      <input type='radio'
        id={this.props.id}
        checked = {this.props.checked}
        className={this.props.className}
        value={this.props.value}
        onChange={e => this.props.onChange(e, 'radio')}
      />
    );
  }
}

export default Radio;