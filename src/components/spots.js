

function Spots({spots}) {
    let cityKey = localStorage.getItem('objId');
    //Check if its not an array if so set prop to a singel element array. (For singel objects)
    if (!Array.isArray(spots)){
        spots = [spots];
    }
    // console.log(trips[0].spot);
    let cityData = spots[0].data;
    // console.log(data)
    let output = '';
    console.log(cityKey)

    // for (let i = 0; i < cityData.length; i++) {
    //     if(cityKey === cityData[i].cityRefId){
    //         console.log(cityData[i].cityRefId)
    //     }
        
        
    // }
    
return(
    <>
         {cityData.forEach(spot => {
            //  console.log(spot)
             output +=`
       <div class="card">
            <div class="card-image" style="background: url(${spot.image})"></div>
          <div class="card-text">
              <span class="date">4 days</span>
              <h2>${spot.name}</h2>
              <p>${spot.description}</p>
          </div>
          <div class="card-stats"></div>
          </div>`;
             
          document.getElementById('body').innerHTML = output;
         })}
        
     
    </>
    
)
 

 
}

export default Spots;
