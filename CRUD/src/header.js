import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <div className = 'header'>User CRUD application.</div>
        <NavLink to='/list' className= 'link' ><span>Record list |</span> </NavLink>
        <NavLink to='/list/new' className= 'link' ><span>Add Record</span></NavLink>
      </div>
    );

  }
}
export default Header ;
