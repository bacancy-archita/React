import React, { Component } from 'react';

class Form2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            form2 : {
                name : '',
                email : '',
                password : ''
            }
        }
    }
    componentDidUpdate(){
        if(this.props.onClick !== this.state.form2){
            this.setState({form2 : this.props.onClick})
        } 
    }
  render() {
    return (
        <div className="form">
        <p>
            <input type="text" placeholder="Enter Name" className="inputs"
             value ={this.state.form2.name} id="name" /><br />
        </p>
        <p>
            <input type="text" placeholder="Enter Email" className="inputs"
             value ={this.state.form2.email} id="email" /><br />
        </p>
        <p>
            <input type="password" placeholder="Enter Password" className="inputs"
            value ={this.state.form2.password} id="password" /><br />
        </p>
        <p>
            <button id="button">Submit</button><br />
        </p>
    </div>
    );
  }
}

export default Form2;
