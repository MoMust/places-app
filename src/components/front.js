import "../css/front.css";
import Nav from './nav'

function Front() {
  return (
    <>
      <div className="background">
       <Nav/>
        <div className="content">
          <div className="header-title">
            <h1>Trip planning made easy</h1>
          </div>
          <div className="card-row">
            <div className="header-card col-8 row">
              <div className="header-card-text col-12">
                <p>
                  View Swedens most attractive places. Dont miss out on exploring the biggest citites like Stockholm, Malmö and Göteborg. Create your own place and save it, make it easy.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Front;
