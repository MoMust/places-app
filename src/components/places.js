
import '../css/browser.css';
import '../css/front.css';
import SpotList from './spotList';
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
    <div id='body'>{data && <SpotList trips={data}/>}
     
    </div>
    </>
   
  );
}

export default Places;
