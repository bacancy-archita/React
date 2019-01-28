import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Button from './button';
import {Route, NavLink } from 'react-router-dom';



class Table extends Component {

  constructor(props) {

    super(props);
    this.state = {
      recordList: [],
      loading: false,
      currentPage: 1,
      fetching: false,
    };
    this.getRecord = this.getRecord.bind(this);
    this.onClick = this.onClick.bind(this);
  
  }
  componentDidMount() {

    this.setState({ loading: true});
    this.getRecord();
  
  }
  getRecord() {

    this.setState({fetching : true });
    axios.get(`https://reqres.in/api/users?page=${this.state.currentPage}`)
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

    if (this.state.currentPage !== this.state.recordList.page) {

      this.getRecord();
      if (this.state.currentPage === this.state.recordList.page)
        this.setState({fetching: false});
    
    }
  
  }
  onClick(e) {

    this.setState({ currentPage: e.target.value }, () => this.fetchData());
  
  }

 
  render() {

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
                  <NavLink to= {`/list/${i+1}`} >Edit |</NavLink>
                  <NavLink to=''>Delete</NavLink>
                </div>
              </div>;
            
            })}
            <Button
              getPage={this.state.recordList.total_pages}
              onClick={this.onClick}>
            </Button>
            {this.state.fetching ? <p>fetching data...</p> : null}
          </div>
        }
      </div>
    );
  
  }

}
export default Table;
