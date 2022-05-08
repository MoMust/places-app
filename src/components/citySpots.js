
import '../css/browser.css';
import '../css/front.css';
import Spots from './spots';
import useFetchSpot from './fetchSpots';
import Nav from './nav';
import CreateCard from './createCard'
//This is browser page 
function Places() {
 
 const {data, isLoading} = useFetchSpot(`http://localhost:8000/spots`)

 
  return (
    <>
    <Nav />
    {<CreateCard />}
     {isLoading &&
      <div className='loading-wrapper'>
         <div className="loading">Loading...</div>
      </div>}
      
    <div id='body'>
      
      {data &&<Spots spots={data}/>}
      
    </div>
   
    </>
   
  );
}

export default Places;
