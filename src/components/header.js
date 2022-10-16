import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/planeLogo.png';

/**
 * @function Renders componenet nav
 */
function Header() {

  return (
    <header className="header">
        <div className="icon-wrapper col-12">
          <img className="logo-image" src={logo}></img>
          <div className="icon-text">
            <a href="./">
              <p>Travel Places</p>
            </a>
          </div>
        </div>
        
    </header>
  );
}

export default Header;
