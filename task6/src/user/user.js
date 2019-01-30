import React, { Component } from 'react';
import './user.css';
import axios from 'axios';
import PropTypes from 'prop-types';

class User extends Component {

  constructor(props) {

    super(props);
    this.state = {
      name: '',
      job: '',
      avatar: '',
      fetching: false,
    };
    this.addRecord = this.addRecord.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editRecord = this.editRecord.bind(this);
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

  componentDidMount() {
    if (this.props.match.path !== '/list/new') {
      axios.get(`https://reqres.in/api/users/${this.props.match.params.id}`)
        .then(response => {
          return response;
        })
        .then(response => {
          this.setState({
            name: response.data.data.first_name,
            job: response.data.data.last_name,
            avatar: response.data.data.avatar,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  UNSAFE_componentWillReceiveProps(prevProp) {
    if (prevProp !== this.props) {
      this.setState({ name: '', job: '' });
    }
  }

  editRecord(e) {

    e.preventDefault();
    axios.put(`https://reqres.in/api/users/${this.props.match.params.id}`,
      {
        name: this.state.name,
        job: this.state.job,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch(err => {
        alert('oopss! something went wrong');
      });

  }
  render() {
    let url = this.props.match.url;
    return (
      <div>
        {(url) === '/list/new' ? <h3>Add User</h3> : <h3>Edit User</h3>}
        <div>
          <form className='form'>
            Name:
            <div><input className='input' value={this.state.name} id='name' onChange={this.handleChange} placeholder='Enter First Name' type='text'></input></div>
            Job:
            <div><input className='input' value={this.state.job} id='job' onChange={this.handleChange} placeholder='Enter Job' type='text'></input></div>
            <div>
              {(url) === '/list/new' ? '' : <img src={this.state.avatar} height='100px' width='100px' alt=''></img>}
            </div>
            <div>
              {(url) === '/list/new' ? 
                <button className='button' onClick={this.addRecord}>{this.state.fetching ? 'Please wait...' : 'Submit'}</button>  :
                <button className='button' onClick={this.editRecord}>Submit</button>
              }
              <button className='button'>Cancel</button>
            </div>
          </form>
        </div>

      </div>
    );

  }

}
User.propTypes = {
  match : PropTypes.object,
}; 
export default User;
