
import '../css/front.css'
import {NavLink} from 'react-router-dom'
import logo from '../icons/planeLogo.png';
function Front() {
  return (
    <div >
       <header className="header-front">
        <div className='row'>
            <div className="icon-wrapper col-12">
                <img className='logo-image' src={logo}></img>
                <div className="icon-text">
                    <p>Travel Places</p>
                </div>
            </div>
            <div className='nav-wrapper col-12'>
                <nav className="nav-bar">
                    <ul>
                       <NavLink exact to="/" className='nav-items'>Home</NavLink>
                        <NavLink to="/Browser" className='nav-items'>Browser</NavLink>
                        <NavLink to="/About" className='nav-items'>About</NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
     <div className='background'>
      <div>
        <p>Some text</p>
      </div>
     </div>
     <div>
       
     </div>
    </div>
  );
}

export default Front;
