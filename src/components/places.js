
import '../css/browser.css';
import '../css/front.css';
// import SpotList from './spotList';
import Spots from './spots';
import useFetchSpot from './fetchSpots';
import Nav from './nav';

//This is browser page 
function Places() {
 
 const {data, isLoading} = useFetchSpot(`http://localhost:8000/cities`)

  return (
    <>
    <Nav />
     {isLoading &&
      <div className='loading-wrapper'>
         <div className="loading">Loading...</div>
      </div>}
    <div id='body'>{data && <Spots cities={data}/>}
     
    </div>
    </>
   
  );
}

export default Places;
