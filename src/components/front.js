import '../css/front.css'
import {NavLink} from 'react-router-dom'
import logo from '../icons/planeLogo.png';


function Front() {
  return (
    <div>
      <header className="header-front">
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
                {/* Navigation */}
                <NavLink exact to="/" className="nav-items">
                  Home
                </NavLink>
                <NavLink to="/Browser" className="nav-items">
                  Browser
                </NavLink>
              </ul>
            </nav>
          </div>
          <div className="header-title">
            <h1>Trip planning made easy</h1>
          </div>
          <div className="row card-row">
            <div className="header-card col-8 row">
              <div className="header-card-text col-12">
                <p>
                  Front-end web development, also known as client-side
                  development is the practice of producing HTML, CSS and
                  JavaScript for a website or Web Application so that a user can
                  see and interact with
                </p>
              </div>
            </div>
            <div className="image-card col-5 "></div>

            <div className="text-card col-6 offset-1">
              <p>
                Front-end web development, also known as client-side development
                is the practice of producing HTML, CSS and JavaScript for a
                website or Web Application so that a user can see and interact
                with
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="background"></div>
    </div>
  );
}

export default Front;
