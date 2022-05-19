import '../css/browser.css';
import '../css/front.css';
import Spots from './spots';
import useFetch from './useFetch';
import Nav from './nav';
import CreateCard from './createCard'
import { useState } from "react"
//This is places page 
function citySpots() {
  //Run useFetch function, return data from db and is loading state, 
 const {data, isLoading} = useFetch(`http://localhost:8000/dataSpots`)
 //Set state for updating card from createCard to spots
 const [card, setCard] = useState('')
  return (
    <>
    {/* Call nav componenet */}
    <Nav />
    {/* Call createCard componenet - for creating new custom card - Set state of input to update in Spots componenet*/}
    {<CreateCard setCard={setCard}/>}
    {/* If data fetched is not showing, show is loading message state */}
     {isLoading &&
      <div className='loading-wrapper'>
         <div className="loading">Loading...</div>
      </div>}
      
    <div id='body'>
      {/* Get data and pass to Spots component - Get state of card to update card */}
      {data &&<Spots spots={data} card={card}/>}

      <div id="myModal" className="modal">


        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>

      </div>
    </div>
   
    </>
   
  );
}

export default citySpots;
