import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../icons/planeLogo.png';
// import '../css/front.css'
function Nav() {


  return (
    <header className="header">
      <div className="row">
        <div className="icon-wrapper col-12">
          <img className="logo-image" src={logo}></img>
          <div className="icon-text">
            <p>Travel Places</p>
          </div>
        </div>
        <div className="nav-wrapper col-6">
          <nav className="nav-bar">
            <ul>
              <NavLink exact to="/" className="nav-items">
                Home
              </NavLink>
              <NavLink to="/Browser" className="nav-items">
                Browser
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
