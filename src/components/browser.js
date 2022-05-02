
import '../css/browser.css';
import '../css/front.css';
import TripList from './tripList';
import useFetch from './fetchPlaces';


//This is browser page 
function Browser() {
 
 const {data, isLoading} = useFetch(`http://localhost:8000/trips`)
 
  return (
    <>
     {isLoading &&
      <div className='loading-wrapper'>
         <div className="loading">Loading...</div>
      </div>}
    <div id='body'>{data && <TripList trips={data}/>}
     
    </div>
    </>
   
  );
}

export default Browser;
