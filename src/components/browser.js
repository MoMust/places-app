import { useNavigate } from "react-router-dom";
import "../css/browser.css";
import createImg from "../images/creation-icon-20.jpg";
import useFetch from "./useFetch";
import Nav from "./nav";
import CityList from "./cities";
/**
 * A component - renders browser page
 * @function
 */
//This is browser page
function Browser() {
  //Run useFetch function, return data of db and is loading state,
  const { data, isLoading } = useFetch(`http://localhost:8000/dataCities`);

  let navigate = useNavigate();
  /**
   * @function clickHandler function that executes when user makes input and submits
   */
  function clickHandler() {
    let userInput = document.getElementById("search").value;

    //Checks user input and displays correct spots
    for (let i = 0; i < data.length; i++) {
      let element = data[i];

      //If input matches show spots
      if (element.name.toUpperCase() == userInput.toUpperCase()) {
        //Save city id to localstorage
        localStorage.setItem("objId", element.cityId);
        let path = `../citySpots`;

        navigate(path);
        location.reload();

        console.log(element);
        console.log(element.cityId);
        //If input do not match send message
      } else {
        console.log("Cannot find what you are looking");
        document.getElementById(
          "render-objects"
        ).innerHTML = `<div class="mismatch">Cannot find what you are looking for</div>`;
      }
    }
    // console.log('userInput')
    // console.log(userInput)
  }

  return (
    <>
      {/* Get data and pass to CityList component */}
      {data && <CityList cities={data} />}
      {/* Call nav componenet */}
      <Nav />
      {/* Main body rendering */}

      <div id="body">
        {/* If data fetched is delayd or not showing, show loading message state */}
        {isLoading && (
          <div className="loading-wrapper">
            <div className="loading">Loading...</div>
          </div>
        )}

        {/* Search JSX*/}
        {isLoading || (
          <div id="search-wrapper">
            <div id="search-container">
              <input placeholder="Search" type="text" id="search"></input>
              <button id="btn-search" onClick={clickHandler}>
                Search
              </button>
            </div>
          </div>
        )}
        {/* Users private list of spots  */}
        {isLoading || (
          <a href="./spotsPage">
            <div onClick={getInfo(0)}>
              <div id="make-c" className="make-container">
                <div className="make-text">
                  <h2>Click here to make your own spot list</h2>
                </div>
                <div className="make-img">
                  <img src={createImg} width="60px" />
                </div>
              </div>
            </div>
          </a>
        )}

        {/* Rendering objects here*/}

        <div id="render-objects"></div>
      </div>
    </>
  );
}

export default Browser;
