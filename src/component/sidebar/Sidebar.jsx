import React from 'react'
import { Link } from "react-router-dom";
import "./Sidebar.css"

export default class Sidebar extends React.Component {
  constructor(props){
    super();
    this.state={
    }
  }
  render() {
    return (
      <>
        <div className={`sidebar-menu${this.props.isMenuOpen === true ? ' open' : ''}`} id='sidebar'>
          <ul>
            <li><Link to="/dashboard" className='link-nav'>Dashboard</Link></li>
            <li><Link to="/todo-app" className='link-nav'>Todo App</Link></li>
            <li><Link to="/todo-sth" className='link-nav'>Todo Sth</Link></li>
          </ul>
        </div>
      </>
    );
  }
}
