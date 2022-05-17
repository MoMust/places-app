import '../css/browser.css';
import '../css/front.css';
import Spots from './spots';
import useFetch from './useFetch';
import Nav from './nav';
import CreateCard from './createCard'

//This is places page 
function Places() {
  //Run useFetch function, return data from db and is loading state, 
 const {data, isLoading} = useFetch(`http://localhost:8000/dataSpots`)
 
 
  return (
    <>
    {/* Call nav componenet */}
    <Nav />
    {/* Call createCard componenet - for creating new custom card */}
    {<CreateCard />}
    {/* If data fetched is not showing, show is loading message state */}
     {isLoading &&
      <div className='loading-wrapper'>
         <div className="loading">Loading...</div>
      </div>}
      
    <div id='body'>
      {/* Get data and pass to Spots component */}
      {data &&<Spots spots={data}/>}
      
    </div>
   
    </>
   
  );
}

export default Places;
