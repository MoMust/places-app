
import '../css/browser.css';
import '../css/front.css';
import TripList2 from './tripList2';
import useFetch from './useFetch';


//This is browser page 
function Places() {
 
 const {data, isLoading} = useFetch(`http://localhost:8000/trips`)

  return (
    <>
     {isLoading &&
      <div className='loading-wrapper'>
         <div className="loading">Loading...</div>
      </div>}
    <div id='body'>{data && <TripList2 trips={data}/>}
     
    </div>
    </>
   
  );
}

export default Places;
