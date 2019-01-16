import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Form1 from './components/form1';
import Form2 from './components/form2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form1: {
        name: "",
        email: "",
        password: ""
      },
      form2: {
        email: "",
        password: ""
      }
    }
    this.formName = 'Form 1';
    this.setChildValue = this.setChildValue.bind(this);
  }

  // setChildValue(e){
  //   const {id, value} = e.target;
  //   let obj = this.state.form1;
  //   obj[id] = value;
  //   this.setState({form1 : obj })
  // }
  setChildValue(e,form){
      const key = e.target.id;
      const val = e.target.value;
      let obj = this.state[form]
      obj[key]=val;
      this.setState({[form] : obj});
  }

  render() {
    return (
      <div>
      <center>Welcome
      {JSON.stringify(this.state.form1)}<br /><br />
      {JSON.stringify(this.state.form2)}
      </center>
        <Form1 setValue = {this.setChildValue}/>
        <Form2 setValue = {this.setChildValue}/>
      </div>
    );
  }
}

export default App;
