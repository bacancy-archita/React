import React, { Component } from 'react';
import './addRecord.css';
import axios from 'axios';
import Edit_user from '../editUser.js/editUser';


class Add_record extends Component {

  constructor(props) {

    super(props);
    this.state = {
      name: '',
      job: '',
      fetching: false,
    };
    this.addRecord = this.addRecord.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    
    let id = event.target.id;
    let val = event.target.value;
    let obj = {};
    obj[id] = val;
    this.setState(obj);

  }

  addRecord(e) {

    e.preventDefault();
    this.setState({fetching : true});
    axios.post(`https://reqres.in/api/users`,
      {
        name: this.state.name,
        job: this.state.job,
      })
      .then((res) => {

        console.log(res.data);
      
      })
      .then(() => {

        this.setState({fetching : false});
      
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
          <div>
            <button  onClick={this.addRecord} className='button'>{this.state.fetching ? 'Please wait...': 'Submit'}</button>
            <button className='button'>Cancel</button>
            
          </div>
        </form>
      </div>
    );

  }

}
export default Add_record;
