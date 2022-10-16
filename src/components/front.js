import "../css/front.css";
import Header from "./header";
import { NavLink } from "react-router-dom";
import logo from "../images/planeLogo.png";
/**
 * @function Front
 * @returns Returns landing page
 */
function Front() {
  return (
    <>
      <div className="background">
        <Header />
        <div className="content">
          <div className="header-title">
            <h1>Trip planning made easy</h1>
          </div>
          <div className="card-row">
            <div className="header-card col-8 row">
              <div className="header-card-text mt-5 col-12">
                <p>
                  View Swedens most attractive places. Dont miss out on
                  exploring the biggest citites like Stockholm, Malmö and
                  Göteborg. Create your own place and save it, make it easy.
                </p>
              </div>
            </div>
          </div>
          <div className="btn-front">
            <NavLink to="/Browser" className="nav-items-front">
              Find hotspots
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Front;
