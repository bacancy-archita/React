import React, { Component } from 'react';
//import logo from './logo.svg';
import Input from './input.js';

class Form2 extends Component {

  render() {
    return (
        <div className="form">
             <h3>{this.props.xyz}</h3>
                <p>
                    <Input type="text"  placeholder="Enter Email" onChange={e=>this.props.setValue(e,'form2')} 
                     id="email" /><br />
                </p>
                <p>
                    <Input type="text" placeholder="Enter Password"  onChange={e=>this.props.setValue(e,'form2')} 
                    id="password" /><br /> 
                </p>
                <p>
                    <button id="button">Submit</button>
                </p>
         </div>
    );
  }
}

export default Form2;
