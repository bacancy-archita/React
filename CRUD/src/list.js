import React, { Component } from 'react';
import './list.css';
import { getRecord, deleteRecord } from './apiCall';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class List extends Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      recordList: null,
      currentPage: 1,
      isLoading: true,
      delete: false,
    };
    this.getRecord = this.getRecord.bind(this);
    this.onClick = this.onClick.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.isDelete = this.isDelete.bind(this);
  }

  componentDidMount() {
    //debugger;
    this.getRecord();
  }

  getRecord() {
    getRecord(this.state.currentPage)
      .then(response => {
        return response;
      })
      .then(response => {
        console.log('called 1');

        console.log('List : ', response);
        if (response) {
          console.log('called 2');
          this.setState({ recordList: response, isLoading : false });
        }
        else {
          console.log('called 3 ');
          this.setState({ recordList: [], isLoading: false });
        }
      })
      .catch(err => {
        console.log('Error occured while fetching data : ', err);
      });
  }

  fetchData(val) {

    // debugger;

    if (this.state.currentPage !== this.state.recordList.page) {
      this.setState({ isLoading: true })
      this.getRecord();

    }
  }

  onClick(e) {
    // debugger;
    this.setState({ currentPage: e.target.value }, () => this.fetchData(true));
  }

  isDelete(e) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      e.preventDefault();
      this.deleteUser();
    }
    else {
      this.setState({ delete: false });
    }
  }

  deleteUser() {
    deleteRecord(this.props.match.params.id)
      .then(response => {
        this.setState({ delete: true });
        console.log("Deleted successfully ", response);
      })
      .catch(err => {
        console.log('Error occured while deleting record ', err);

      });
  }

  buttons = () => {
    let page = [];
    for (let i = 1; i <= this.state.recordList.total_pages; i++) {
      page.push(
        <button key={i} onClick={this.onClick} value={i} className={this.state.recordList.page === (i) ? 'activeButton' : 'button'} >{i}</button>
      );
    }
    return page;
  }

  render() {
    // debugger
    const { isLoading, recordList } = this.state
    console.log('render');
    return (
      <div>
        {isLoading && recordList === null ? <p>Please wait while we are getting user details... </p> :
          <div>
            <form className='table'>
              <div>
                <div className='table-col'>Firstname</div>
                <div className='table-col'>Lastname</div>
                <div className='table-col'>Avatar</div>
                <div className='table-col'>Action</div>
              </div>
            </form>
            {this.state.recordList && this.state.recordList.data && this.state.recordList.data.map((u) => {

              return <div key={u.id} className='rows'>
                <div className='left'> {u.first_name}</div>
                <div className='right'> {u.last_name}</div>
                <div className='img'><img src={u.avatar} width="50px" height="50px"></img></div>
                <div className='cols'> {u.action}</div>
                <div className='edit'>
                  <Link to={`/list/${u.id}`} >Edit|</Link>
                  <Link to='' onClick={this.isDelete} >Delete</Link>
                </div>
              </div>
            })}
            
              {this.buttons()} {!isLoading ? null : <span className= 'fetch'> Fetching data...</span> }
            
          </div>
        }
      </div>
    );

  }

}
List.propTypes = {
  match: PropTypes.object,
};
export default List;

/* -----------------------fetching data -------------------- */

/*
  this.setState({ fetching: true });
  axios.get(`https://reqres.in/api/users?page=${this.state.recordList.page}`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      console.log(response);
      this.setState({ recordList: response || [], loading: false, fetching: false });
    })
    .catch(function (error) {
      alert("Oops! Something went wrong.");
    });
 */

/* -----------------------deleting data -------------------- */

/*
   axios.delete(`https://reqres.in/api/users/${this.props.match.params.id}`)
   .then((res) => { return res; })
   .then((res) => {
     this.setState({ delete: true });
     console.log("Delete successfully", res);
   })
   .catch((error) => {
     console.log(error);
   });
*/