import { useState, useEffect } from 'react';
import '../css/browser.css';
import '../css/front.css';
import TripList from './tripList';


//This is browser page 
function Browser() {
  //Use state for changing the state of the page
  const [trip, setTrips] = useState(null)
  const [isLoading, setisLoading] = useState(true)
  useEffect(() =>{
    //Fetch objects from json database
    fetch(`http://localhost:8000/trips`)
    //After fetch wait for response and convert to json
    .then(res =>{
      return res.json(); 
    })
    //Get data from json resp and set new state with data
    .then(data =>{
      setTrips(data);
      setisLoading(false)
    })
  },[])
  return (
    <>
     {isLoading &&
      <div className='loading-wrapper'>
         <div className="loading">Loading...</div>
      </div>}
    <div id='body'>{trip && <TripList trips={trip}/>}
     
    </div>
    </>
   
  );
}

export default Browser;
