import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Sidebar extends Component {
  render() {
    return (
      <div>
         <ul className='sidebar-ul'>
              <li  className ='sidebar-link'>
                  <NavLink to='/creative/page1' >Page 1</NavLink>
              </li>
              <li  className ='sidebar-link'>
                  <NavLink to='/creative/page2' >Page 2</NavLink>       
              </li>
              <li  className ='sidebar-link'>
                  <NavLink to='/creative/page3'>Page 3</NavLink>
              </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
