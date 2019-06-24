import React, { Component } from 'react'
import { InputGroup, Input } from 'reactstrap'

class Checkbox extends Component {
  render() {
    return (
      <input type='checkbox'
        id={this.props.id}
        className={this.props.className}
        value={this.props.value}
        onChange={e => this.props.onChange(e, 'check')}
      />
    );
  }
}

export default Checkbox;