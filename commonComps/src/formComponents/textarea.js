import React, { Component } from 'react'
import { InputGroup, Input } from 'reactstrap'

class Textarea extends Component {
  render() {
    return (
      <InputGroup className='mb-3'>
      
          <textarea
            id={this.props.id}
            rows={this.props.rows}
            cols={this.props.cols}
            onChange={e => this.props.onChange(e)} />
      </InputGroup>
    );
  }
}

export default Textarea;