import { useNavigate } from "react-router-dom";
import '../css/browser.css';
import '../css/front.css';
import useFetch from './useFetch';
import Nav from './nav';
import CityList from './cityList';

//This is browser page 
function Browser() {
 //Run useFetch function, return data of db and is loading state, 
 const {data, isLoading} = useFetch(`http://localhost:8000/dataCities`)
  let navigate = useNavigate(); 
  function clickHandler(){
    let userInput = document.getElementById("search").value;
    //Checks user input and displays correct spots
    for (let i = 0; i < data.length; i++) {
                let element = data[i];
                //If input matches 
                if(element.name == userInput){
                   localStorage.setItem('objId', element.cityId);
                  let path = `../citySpots`;
                  
                    navigate(path);
                    location.reload(); 
                    
                    console.log(element)
                    console.log(element.cityId)
                   
                }else{
                  console.log('Cannot find what you are looking')
                  document.querySelector('#fail').innerText = 'Cannot find what you are looking';
                }
            }
  // console.log(userInput)
  }
  
  // console.log('Check data')
  // console.log(data)
  return (
    <>
    {/* Call nav componenet */}
    <Nav />
    <input 
    placeholder="Search"
    type="text"
    id="search" 
    >
    </input>
    <button onClick={clickHandler}>Search</button>
    {/* If data fetched is not showing, show is loading message state */}
     {isLoading &&
      <div className='loading-wrapper'>
         <div id="fail" className="loading">Loading...</div>
      </div>}
      {/* Get data and pass to CityList component */}
    <div id='body'>{data && <CityList cities={data}/>}
     
    </div>
    </>
   
  );
}

export default Browser;
