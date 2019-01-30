import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <h3>User CRUD application.</h3>
        <NavLink to='/list' >Record list | </NavLink>
        <NavLink to='/list/new' >Add Record</NavLink>
      </div>
    );

  }
}
export default Header ;
