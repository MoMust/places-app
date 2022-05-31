import { useEffect, useState } from "react"
/**
 * @function Fetch data from json server and create a loading message while waiting to get data
 * @param {string} url Takes a url as a parameter
 * @returns Data - isLoading
 */
const useFetch = (url) =>{
     //Use state for changing the state of the page
    const [data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    
 useEffect(() =>{
   //Set timer for loading 
    //  setTimeout(()=>{
       //Fetch objects from json database
    fetch(url)
    //After fetch wait for response and convert to json
    .then(res =>{
      return res.json(); 
    })
    //Get data from json resp and set new state with data
    .then(data =>{
      setData(data);
      setisLoading(false)
    })
    //  }, 20000)
   
  },[url]);
  return {data, isLoading}
}

export default useFetch;