import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Topbar extends Component {
    render() {
        return (
            <div className='topbar'>
                 <ul>
                     <li>
                         <NavLink to='/technical/page1'>Page 1</NavLink>
                     </li>
                     <li>
                         <NavLink to='/technical/page2'>Page 2</NavLink>
                     </li>
                     <li>
                         <NavLink to='/technical/page3'>Page 3</NavLink>
                     </li>
                 </ul>
                 
            </div>
        );
    }
}

export default Topbar;