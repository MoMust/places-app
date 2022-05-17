
import '../css/browser.css';
import '../css/front.css';
import useFetch from './useFetch';
import Nav from './nav';
import CityList from './cityList';

//This is browser page 
function Browser() {
 //Run useFetch function, return data of db and is loading state, 
 const {data, isLoading} = useFetch(`http://localhost:8000/dataCities`)
 
  return (
    <>
    {/* Call nav componenet */}
    <Nav />
    {/* If data fetched is not showing, show is loading message state */}
     {isLoading &&
      <div className='loading-wrapper'>
         <div className="loading">Loading...</div>
      </div>}
      {/* Get data and pass to CityList component */}
    <div id='body'>{data && <CityList cities={data}/>}
     
    </div>
    </>
   
  );
}

export default Browser;
