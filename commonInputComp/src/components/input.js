import React, { Component } from 'react';


class Input extends Component{
    render(){
        return(
          
            <input className="inputs"
              type = {this.props.type}
              value = {this.props.value}
              id = {this.props.id}
              placeholder = {this.props.placeholder}
              onChange={e=>this.props.onChange(e)}>
            </input>
           
        );
    }
}
export default Input;