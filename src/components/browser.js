import { useNavigate } from "react-router-dom";
import "../css/browser.css";

import useFetch from "./useFetch";
import Nav from "./nav";
import CityList from "./cityList";

//This is browser page
function Browser() {
  //Run useFetch function, return data of db and is loading state,
  const { data, isLoading } = useFetch(`http://localhost:8000/dataCities`);
  let navigate = useNavigate();
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

  // console.log('Check data')
  // console.log(data)
  return (
    <>
      {/* If data fetched is not showing, show is loading message state */}

      {/* Get data and pass to CityList component */}
      {data && <CityList cities={data} />}
      {/* Main body rendering */}
      <div id="body">
        {/* Call nav componenet */}
        <Nav />
        
        {/* Search */}
        <div id="search-wrapper">
          <div id="search-container">
            <input placeholder="Search" type="text" id="search"></input>
            <button id="btn-search" onClick={clickHandler}>
              Search
            </button>
          </div>
        </div>
        {isLoading && (
          <div className="loading-wrapper">
            <div className="loading">Loading...</div>
          </div>
        )}
        {/* Rendering objects*/}
        <div id="render-objects"></div>
      </div>
    </>
  );
}

export default Browser;
