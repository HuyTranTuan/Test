import React, { useState } from 'react';
import "./Footer.css";

const Footer = (props) =>{
  const [state, setstate] = useState({});
  return (
    <div className={`footer ${props.isMenuOpen === true ? 'open' : ''}`} id='footer'>
      <p>Footer</p>
    </div>
  );
}

export default Footer;