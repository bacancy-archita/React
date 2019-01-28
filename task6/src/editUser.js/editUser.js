import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


class Edit_user extends Component{

  constructor(props){

    super(props);
    this.state = {
      name : '',
      job : '',
    };
    this.editRecord = this.editRecord.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    
    let id = event.target.id;
    let val = event.target.value;
    let obj = {};
    obj[id] = val;
    this.setState(obj);
    
  }
  componentDidMount(){

    axios.get(`https://reqres.in/api/users/${this.props.match.params.id}`)
      .then(response => {

        return response;
      
      })
      .then(response => {

        console.log(response);
        this.setState({ name : response.data.data.first_name, job : response.data.data.last_name });
  
      })
      .catch(function (error) {
  
        alert("Oops! Something went wrong.");
        
      });
  
  }
  editRecord(e){

    e.preventDefault();
    axios.put(`https://reqres.in/api/users/${this.props.match.params.id}`,
      {
        name : this.state.name,
        job : this.state.job,
      })
      .then((res) => {

        console.log(res.data);

      })
      .catch(err => {

        alert('oopss! something went wrong');

      });
  
  }
  render(){

    return(
      <div>
        <h3>Edit User</h3>
        <form className='form'>
          Name:
				  <div><input className='input' value= {this.state.name} OnChange = {this.handleChange} id='name' type='text'></input></div>
          Job:
				  <div><input className='input' value={this.state.job} OnChange = {this.handleChange} id='job'  type='text'></input></div>
          <div>
            <button onClick={this.editRecord} className='button'>Submit</button>
            <button className='button'>Cancel</button>
            
          </div>
        </form>
      </div>
    );

  }

}

Edit_user.propTypes = {
  match: PropTypes.object,
}; 

export default Edit_user;