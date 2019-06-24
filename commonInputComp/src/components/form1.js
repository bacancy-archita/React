import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Input from './input.js';

class Form1 extends Component {
  render() {
      
    return (
        <div className="form">
        <h3>{this.props.xyz}</h3>
            <p>
                <Input type="text" placeholder="Enter Name" onChange={e=>this.props.setValue(e,'form1')} 
                className="inputs" id="name" /><br />
            </p>
            <p>
                <Input type="text" placeholder="Enter Email" className="inputs" onChange={e=>this.props.setValue(e,'form1')} 
                id="email" /><br /> 
            </p>
            <p>
                <Input type="text" placeholder="Enter Password"  className="inputs" onChange={e=>this.props.setValue(e,'form1')} 
                id="password"/><br />
            </p>
            <p>
                <button id="button" onClick={this.onClick}>Submit</button><br />
            </p>
        </div>
    );
  }
}

export default Form1;
