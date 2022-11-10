import React from 'react'
import { Link } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = ({isMenuOpen, sidebarArray}) => {
  return (
    <div className={`sidebar-menu${isMenuOpen === true ? ' open' : ''}`} id='sidebar'>
      <ul className='sidebar-nav-container'>
        {/* <li className='sidebar-nav-element'><Link to="/dashboard" className='nav-link'>Dashboard</Link></li>
        <li className='sidebar-nav-element'><Link to="/todo-sth" className='nav-link'>Todo Sth</Link></li> */}
        {sidebarArray.map((value, index)=>
          <li key={index} className='sidebar-nav-element'>
            <Link to={value.path} className='nav-link'>{value.name}</Link>
          </li>)
        }
      </ul>
    </div>
  );
}

export default Sidebar;