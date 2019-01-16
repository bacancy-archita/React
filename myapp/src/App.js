import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Login from './component/body/Login'
import SignUp from './component/body/SignUp'
import Footer from './component/Footer';

class App extends Component {
  constructor(props){
    //debugger
    super(props);
    this.state = {email : '', password : ''};
    this.getValues = this.getValues.bind(this);
  }
  
  getValues(em,pass){
    //debugger
    this.setState({email:em,password:pass})
    //console.log(this.state);
    
    // alert(this.setState.email);
    // alert(this.setState.password);
   }
  render() {
    //debugger
    return (
      <div>
        <Header  />
        <SignUp setValues = {this.getValues}/>
        <Login values = {this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
