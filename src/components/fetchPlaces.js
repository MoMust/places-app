import { useEffect, useState } from "react"

const useFetch = (url) =>{
     //Use state for changing the state of the page
    const [data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    let num = 2;
 useEffect(() =>{
     
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
  },[url]);
  return {data, isLoading}
}

export default useFetch;