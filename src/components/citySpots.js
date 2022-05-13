
import '../css/browser.css';
import '../css/front.css';
import Spots from './spots';
import useFetch from './fetchData';
import Nav from './nav';
import CreateCard from './createCard'
//This is browser page 
function Places() {
 
 const {data, isLoading} = useFetch(`http://localhost:8000/spots`)

 
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
