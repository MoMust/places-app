// import Create from './create'
// import { useState } from "react"


// Get saved city id from browser page and save in variabel
let cityKey = localStorage.getItem('objId');
//Function/component - To get spots in each city
function Spots({spots, card}) {
    
    //Check if its not an array if so set prop to a singel element array. (For singel objects)
    if (!Array.isArray(spots)){
        spots = [spots];
    }

    let cityData = spots;
    let arr = [];
    let output = '';
    console.log('cityData')
    console.log(cityData)
    console.log(card)
    //To get spots related to city
    //Chek if cityKey matches spots reference key
    for (let i = 0; i < cityData.length; i++) {
       
        //Key do not match
        if(cityKey != cityData[i].cityRefId){
            // console.log('no match')

           //Key matches, create an array with matching objects 
        }else{arr.push(cityData[i]);
            // console.log(arr);
        }
    
    }
    for (let i = 0; i < cityData.length; i++) {
        // console.log(cityData[i].id)
        
    }

    
   window.handleClickDel = (id) =>{
       if(window.confirm('Are you sure that you want to delete this card?')){
        fetch('http://localhost:8000/dataSpots/' + id, {
      method: 'DELETE'
    }).then(() =>{
        location.reload();
    })
       }
    
  }
   window.handleClickUpd = (id)=>{
    fetch(`http://localhost:8000/dataSpots/` + id, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: card, description: card, cityRefId:cityKey})
  }).then(() =>{
    console.log('Spot updated')
    location.reload();
  })
   }
  
return(
    <>
    
         {arr.forEach(spot => {
            //  console.log(spot)
            
             output +=`
       <div class="card">
            <div class="card-image" style="background: url(${spot.image})"></div>
          <div class="card-text">
              <span class="date">5 days</span>
              
              <h2>${spot.name}</h2>
              <p>${spot.description}</p>
              <button id="btn" onclick="handleClickDel(${spot.id})">Delete</button>
              <button id="btnUpd" onclick="handleClickUpd(${spot.id})">Update</button>
              
          </div>
          
          </div>`;

          document.getElementById('body').innerHTML = output;
         })}
        
          
     
    </>
    
)
 
}

export default Spots;
