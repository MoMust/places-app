
import '../css/browser.css';
import '../css/front.css';

import useFetch from './fetchData';
import Nav from './nav';
import CityList from './cities';

//This is browser page 
function Browser() {
 
 const {data, isLoading} = useFetch(`http://localhost:8000/cities`)
 
  return (
    <>
    <Nav />
     {isLoading &&
      <div className='loading-wrapper'>
         <div className="loading">Loading...</div>
      </div>}
  
    <div id='body'>{data &&  <CityList cities={data}/>}
     
    </div>
    </>
   
  );
}

export default Browser;
