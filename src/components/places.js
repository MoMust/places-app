
import '../css/browser.css';
import '../css/front.css';
// import SpotList from './spotList';
import TripList from './tripList';
import useFetchSpot from './fetchSpots';
import Nav from './nav';

//This is browser page 
function Places() {
 
 const {data, isLoading} = useFetchSpot(`http://localhost:8000/trips`)

  return (
    <>
    <Nav />
     {isLoading &&
      <div className='loading-wrapper'>
         <div className="loading">Loading...</div>
      </div>}
    <div id='body'>{data && <TripList trips={data}/>}
     
    </div>
    </>
   
  );
}

export default Places;
