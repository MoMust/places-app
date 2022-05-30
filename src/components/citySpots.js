import "../css/browser.css";
import "../css/front.css";
import Spots from "./spots";
import useFetch from "./useFetch";
import Nav from "./nav";
import CreateCard from "./createCard";
import { useState } from "react";
//This is places page
function citySpots() {
  //Run useFetch function, return data from db and is loading state,
  const { data, isLoading } = useFetch(`http://localhost:8000/dataSpots`);
  //Set state for updating card from createCard to spots
  
  const [cardName, setCardName] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      {/* If data fetched is not showing, show is loading message state */}
      {isLoading && (
        <div className="loading-wrapper">
          <div className="loading">Loading...</div>
        </div>
      )}

      <div id="body">
        {/* Call nav componenet */}
        <Nav />
        {/* Call createCard component - for creating new custom card - Set state of input to update in Spots componenet*/}
        {
          <CreateCard
            errorMessage={errorMessage}
            setCardName={setCardName}
            setCardDescription={setCardDescription}
          />
        }
        {/* Get data and pass to Spots component - Get state of card to update card */}
        {data && (
          <Spots
            setErrorMessage={setErrorMessage}
            spots={data}
            cardName={cardName}
            cardDescription={cardDescription}
          />
        )}
        <div id="render-objects"></div>
      </div>
    </>
  );
}

export default citySpots;
