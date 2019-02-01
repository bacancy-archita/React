import React, { Component } from 'react';
import './user.css';
import { getRecordUpdate, editRecord, addRecord} from '../apiCall';
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
    this.getRecord = this.getRecord.bind(this);
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
    let add = {
      name: this.state.name,
      job: this.state.job,
    };
    this.setState({ fetching: true });
    addRecord(add)
      .then(response => {
        console.log(response);
        this.setState({ fetching: false });
      })
      .catch(err => {
        console.log('Error occured while adding user = ', err);
      });
  }
  componentDidMount() {
    this.getRecord();
  }

  getRecord() {
    if (this.props.match.path === '/list/:id') {
      getRecordUpdate(this.props.match.params.id)
        .then(response => {
          console.log('data...', response);
          console.log(response.data);

          this.setState({
            name: response.data.first_name,
            job: response.data.last_name,
            avatar: response.data.avatar,
          });
        })
        .catch(err => {
          console.log('Error occured while getting data for editing user = ', err);
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
    let update = {
      name: this.state.name,
      job: this.state.job,
    };
    editRecord(this.props.match.params.id, update)
      .then((response) => {
        console.log('edit ', response);
      })
      .catch(err => {
        console.log('Error occured while editing user = ', err);
      });
  }

  render() {
    let url = this.props.match.url;
    return (
      <div>
        {(url) === '/list/new' ? <h4>Add User</h4> : <h4>Edit User</h4>}
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
                <button className='button' onClick={this.addRecord}>{this.state.fetching ? 'Please wait...' : 'Submit'}</button> :
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
  match: PropTypes.object,
};

export default User;

/* ---------------------fetching data for edit record---------------------------*/


/*
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
*/


/* ---------------------editing data for edit record---------------------------*/


/*
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
*/


/* ---------------------adding data for add record---------------------------*/


/*
  this.setState({ fetching: true });
    axios.post(`https://reqres.in/api/users`,
      {
        name: this.state.name,
        job: this.state.job,
      })
      .then((res) => {
        console.log(res.data);
      })
      .then(() => {
        this.setState({ fetching: false });
      })
      .catch(function (error) {
        alert("something went wrong");
      });
  }
*/
