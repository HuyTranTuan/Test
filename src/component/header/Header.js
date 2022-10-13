import React, { Component } from 'react'
import "./Header.css"

export default class Header extends Component {
  constructor(props){
    super();
    this.state = {

    };
  }
  clickToggle = (e) =>{
  }
  
  render() {
    return (
      <div id='header'>
        <button onClick={this.props.onMenuToggle} className="toggle-btn">Toggle</button>
      </div>
    )
  }
}
