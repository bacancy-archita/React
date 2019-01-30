import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordList: {},
      loading: false,
      fetching: false,
      delete : false,
    };
    this.getRecord = this.getRecord.bind(this);
    this.onClick = this.onClick.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.isDelete = this.isDelete.bind(this);
    
  
  }
  componentDidMount() {
    this.setState({ loading: true});
    this.getRecord();
  }
  getRecord() {
    this.setState({fetching : true });
    axios.get(`https://reqres.in/api/users?page=${this.state.recordList.page}`)
      .then(response => {
        return response.data;
      })
      .then(response => {
        console.log(response);
        this.setState({ recordList: response || [], loading: false, fetching : false});
      })
      .catch(function (error) {
        alert("Oops! Something went wrong.");
      });
  }
  fetchData() {
    const page = this.state.recordList.page;
    if (page == page) {
      this.getRecord({loading : false});
    }
  }
 
  onClick(e) {
    this.setState({recordList  : { page : e.target.value }}, () => this.fetchData());
  }


  isDelete(e){
    if(window.confirm("Are you sure you want to delete this user?")){
      e.preventDefault();
      this.deleteUser();
    }
    else{
      this.setState({delete : false});
    }
  }

  deleteUser(){
    axios.delete(`https://reqres.in/api/users/${this.props.match.params.id}`)
      .then((res) => {return res;})
      .then((res) => {
        this.setState({delete : true});
        console.log("Delete successfully",res);
      })
      .catch((error) => {console.log(error);
      });
    
  }

  render() {
    let page = [];
    for (let i = 1; i <= this.state.recordList.total_pages; i++) {
      page.push(
        <button key = {i} onClick = {this.onClick} value = {i} className='button' >{i}</button>
      );
    }
    return (
      <div>
        {this.state.loading ? <p>Please wait...... </p> :
          <div>
            <form className='table'>
              <div>
                <div className='table-col'>Firstname</div>
                <div className='table-col'>Lastname</div>
                <div className='table-col'>Avatar</div>
                <div className='table-col'>Action</div>
              </div>
            </form>
            {this.state.recordList && this.state.recordList.data && this.state.recordList.data.map((u, i) => {

              return <div key={i} className='rows'>
                <div className='left'> {u.first_name}</div>
                <div className='right'> {u.last_name}</div>
                <div className='img'><img src={u.avatar} width="50px" height="50px"></img></div>
                <div className='cols'> {u.action}</div>
                <div className='edit'>
                  <Link to= {`/list/${i+1}`} >Edit |</Link>
                  <Link to='' onClick = {this.isDelete} >Delete</Link>
                </div>
              </div>;
            })}
            {page}
            {this.state.fetching ? <p>fetching data...</p> : null}
          </div>
        }
      </div>
    );
  
  }

}
List.propTypes = {
  match : PropTypes.object,
}; 
export default List;
