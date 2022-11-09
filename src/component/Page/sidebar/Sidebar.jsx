import React from 'react'
import { Link } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = (props) => {
  return (
    <div className={`sidebar-menu${props.isMenuOpen === true ? ' open' : ''}`} id='sidebar'>
      <ul className='sidebar-nav-container'>
        <li className='sidebar-nav-element'><Link to="/dashboard" className='nav-link'>Dashboard</Link></li>
        <li className='sidebar-nav-element'><Link to="/todo-sth" className='nav-link'>Todo Sth</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;