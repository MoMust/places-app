import { useEffect, useState } from "react"

const useFetchSpot = (url) =>{
     //Use state for changing the state of the page
    const [data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(true)
 useEffect(() =>{
     
    //Fetch objects from json database
    fetch(url)
    //After fetch wait for response and convert to json
    .then(res =>{
      return res.json(); 
    })
    //Get data from json resp and set new state with data
    // for (let i = 0; i < data.length; i++) {
    //     let element = data[i];
    //     if(element.id !== num){continue}
    //     // console.log(element);
    // }
    .then(data =>{
        setData(data);
    
      
      setisLoading(false)
    })
  },[url, url]);
  return {data, isLoading}
}

export default useFetchSpot;