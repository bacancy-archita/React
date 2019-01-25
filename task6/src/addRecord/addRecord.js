import React, { Component } from 'react';
import './addRecord.css';
import axios from 'axios';


class Add_record extends Component {

  constructor(props) {

    super(props);
    this.state = {
      name : '',
      job : '',
    };
    this.addRecord = this.addRecord.bind(this);
    this.handleChange = this.handleChange.bind(this);
  
  }
  handleChange(event){

    let id = event.target.id;
    let val = event.target.value;
    let obj = { };
    obj[id] = val;
    this.setState(obj);
    
  }
  addRecord() {

    axios.post('https://reqres.in//api/users')
      .then(function (response) {

        return response;
      
      })
      .then(function(response){

        console.log(response.data);
        
      })
      .catch(function (error) {

        alert("something went wrong");
      
      });
  
  }
  render() {

    return (
      <div>
        <h3>Add User</h3>
        <form className='form'>
          Name:
				  <div><input className='input' id='name' onChange={this.handleChange} placeholder='Enter First Name' type='text'></input></div>
          Job:
				  <div><input className='input' id='job' onChange={this.handleChange} placeholder='Enter Job' type='text'></input></div>
          <div><button onClick={this.addRecord} className='button'>Submit</button><button className='button'>Cancel</button></div>
        </form>
      </div>
    );

  }

}
export default Add_record;
