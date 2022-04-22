import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Nav() {
  return (
     <header class="header">
        <div class="row">
            <div class="icon-wrapper col-12">
                <div class="icon-text">
                    <p>Travel Places</p>
                </div>
            </div>
            <div class="nav-wrapper col-12">
                <nav class="nav-bar">
                    <ul>
                       <NavLink exact to="/" className='nav-items'>Home</NavLink>
                        <NavLink to="/Browser" className='nav-items'>Browser</NavLink>
                        <NavLink to="/About" className='nav-items'>About</NavLink>
                    </ul>
                </nav>
            </div>
        </div>
       
    </header>
  );
}

export default Nav;
