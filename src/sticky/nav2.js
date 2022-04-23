import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './iconPin2.png'
function Nav() {

    document.addEventListener('DOMContentLoaded', function() {
  //the event occurred
     let navbar = document.getElementById('navbar');
        let menu = document.getElementById('menu');

    window.onscroll = function(){
        if(window.pageYOffset >= menu.offsetTop){
            navbar.classList.add('sticky');
        }else{
            navbar.classList.remove('sticky');

        }
    }
})
    
     

    

  return (
      <>
    <div className="header">
        <nav id='navbar'>
                <img className='logo' src={logo}></img>
                <ul id='menu'>
                    <NavLink exact to="/" className='nav-items'>Home</NavLink>
                    <NavLink to="/Browser" className='nav-items'>Browser</NavLink>
                    <NavLink to="/About" className='nav-items'>About</NavLink>
                </ul>
        </nav>
       
    </div>
   
      </>
    
  );
}

export default Nav;
