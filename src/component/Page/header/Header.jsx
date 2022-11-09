import React from 'react'
import "./Header.css"

const Header = (props) => {
  const clickToggle = (e) =>{
    props.onMenuToggle();
  }
  
  return (
    <div id='header' className={`header${props.isMenuOpen === true ? ' open' : ''}`}>
      <button onClick={clickToggle} className="toggle-btn">≡</button>
    </div>
  );
}

export default Header;