import { useNavigate } from "react-router-dom";
import "../css/browser.css";
import createImg from "../images/creation-icon-20.jpg";
import useFetch from "./useFetch";
import Header from "./header";
import Cities from "./cities";
/**
 * A component - renders browser page
 * @function
 */
//This is browser page
function Browser() {
  //Run useFetch function, return data of db and is loading state,
  const { dataSpots, isLoading } = useFetch(`http://localhost:8000/dataCities`);

  let navigate = useNavigate();
  /**
   * @function clickHandler function that executes when user makes input and submits
   */
  function clickHandler() {
    let userInput = document.getElementById("search").value;

    //Checks user input and displays correct spots
    for (let i = 0; i < dataSpots.length; i++) {
      let element = dataSpots[i];

      //If input matches show spots
      if (element.name.toUpperCase() == userInput.toUpperCase()) {
        //Save city id to localstorage
        localStorage.setItem("objId", element.cityId);
        let path = `../spotsPage`;

        navigate(path);
        location.reload();

        console.log(element);
        console.log(element.cityId);
        //If input do not match send message
      } else {
        document.getElementById(
          "render-objects"
        ).innerHTML = `<div class="search-mismatch">No matches</div>`;
      }
    }
    // console.log('userInput')
    // console.log(userInput)
  }

  return (
    <>
      {/* Get data and pass to CityList component */}
      {dataSpots && <Cities cities={dataSpots} />}
      {/* Call nav componenet */}
      <Header />
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
              <div className="user-list-container">
                <div className="user-list-text">
                  <h2>Click here to make your own spot list</h2>
                </div>
                <div className="user-list-img">
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
