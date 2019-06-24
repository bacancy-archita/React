import React, { Component } from 'react';
import './App.css';
import Form1 from './components/form1';
import Form2 from './components/form2';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      email: '',
      password: '', 
      validEmail:true,
    }
    this.getValues = this.getValues.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
   }
  getValues(obj) {
    if (this.validate(obj)) {
      let array = [...this.state.users,obj]
      this.setState({ users: array });
    }
    else {
      this.setState({validEmail : false})
    }
  }

  validate(obj) {
    let valid = true;
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].email == obj.email) {
        valid = false;
      }
      else { valid = true }
    }
    return valid;

  }
  onChange(e) {
    const id = e.target.id;
    const val = e.target.value;
    let obj = {};
    obj[id] = val;
    this.setState(obj);
  }

  onClick() {
    let valid = '';
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].email == this.state.email && this.state.users[i].password == this.state.password) {
        valid = "Done";
       }
      else {
        valid = "Not Done";
       }
    }
    alert(valid);
  }

  render() {
    return (
      <div className="App">
        <Form1 setValues={this.getValues} />
        <Form2 onChange={this.onChange} onClick={this.onClick} />
      </div>
    );
  }
}


export default App;
