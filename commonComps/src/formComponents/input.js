import React, { Component } from 'react'
import { Input } from 'reactstrap'

class Inputs extends Component {
  handleBlur(id, val, msg, nullmsg) {
    //debugger
    let reg
    const error = this.props.error
    console.log(error);

    switch (id) {
      case 'name':
        reg = /^[a-zA-Z ]*$/;
        break;
      case 'email':
        reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        break;
      case 'password':
        reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        break;
      case 'mob':
        reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        break;
      case 'current':
        reg = /[A-Za-z0-9'\.\-\s\,]/
        break;
      case 'permanent':
        reg = /[A-Za-z0-9'\.\-\s\,]/
        break;
      default:
        break;
    }
    try {
      if (val.length == 0) {
        error[id] = nullmsg
        this.props.onBlur(error)
      }
      else if (val.match(reg)) {
        error[id] = ""
        this.props.onBlur(error)
      }
      else {
        error[id] = msg
        this.props.onBlur(error)

      }
    } catch (e) {
      console.log('error', e);

    }
  }
  render() {
    return (
      <>
        <Input className={this.props.className}
          type={this.props.type}
          error={this.props.error}
          checked={this.props.checked}
          name={this.props.name}
          id={this.props.id}
          value={this.props.value}
          rows={this.props.rows}
          cols={this.props.cols}
          onBlur={() => this.handleBlur(this.props.id, this.props.value, this.props.msg, this.props.nullmsg)}
          onChange={this.props.onChange} >
        </Input>

      </>
    );
  }
}


export default Inputs;
