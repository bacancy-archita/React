import React, { Component } from 'react';
import Form1 from './form1';
import Form2 from './form2';

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            form1 : {
                name : '' , 
                email : '' , 
                password : ''
            },
            form2 : {
                name : '',
                email : '',
                password : ''
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onChange(e){
        //debugger;
        const id = e.target.id;
        const val = e.target.value;
        let obj = {...this.state.form1}
        obj[id] = val;
        this.setState({form1 :  obj})
    }
    onClick(){
        const form1 = this.state.form1;
        const form2 = {...form1}
        this.setState({form2 : form2});

    }
  render() {
      //debugger;
    return (
        <div>
            <Form1 onChange = {this.onChange} onClick = {this.onClick} />
            <Form2 onClick = {this.state.form2}/>
        </div>
    );
  }
}

export default Body;
