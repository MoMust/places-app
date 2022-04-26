import { useState, useEffect } from 'react';
import '../css/browser.css';
import '../css/front.css';
import TripList from './tripList';


function Browser() {

  const [trip, setTrips] = useState(null)

  useEffect(() =>{
    fetch('http://localhost:8000/trips')
    .then(res =>{
      return res.json();
    })
    .then(data =>{
      setTrips(data);
    })
  },[])
  return (
    <div id='body'>
      {trip && <TripList trips={trip}/>}
        
    </div>
      
    
  );
}

export default Browser;
