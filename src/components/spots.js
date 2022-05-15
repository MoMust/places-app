// import Create from './create'
// import { useState } from "react"

// Get saved city object id from browser page and save in variabel
let cityKey = localStorage.getItem('objId');
//Function/component - To get spots in each city
function Spots({spots}) {
    
    //Check if its not an array if so set prop to a singel element array. (For singel objects)
    if (!Array.isArray(spots)){
        spots = [spots];
    }

    let cityData = spots;
    let arr = [];
    let output = '';
    console.log('cityData')
    console.log(cityData)
    //Chek if cityKey matches spots reference key
    for (let i = 0; i < cityData.length; i++) {

        //Key do not match
        if(cityKey != cityData[i].cityRefId){
            // console.log('no match')
           //Key matches, create an array with matching objects 
        }else{arr.push(cityData[i]);
            console.log(arr);}
    
    }

   
// const [title, setTitle] = useState("")
//  const changeHandler = (e) =>{setTitle(e.target.value)};
// //    window.handleInputChange = (e) =>{
// //     setTitle(e.target.value)
// //     }

//     let output = `<div class="card create-card">
//             <div class="card-image"></div>
//           <div class="card-text card-text-area">
              
//               <h2>Create new spot</h2>
//               <form>
//               <label>Spot title</label>
//               <input
//               required
//               value="${title}"
//               onChange="${changeHandler}"
//               type="text" 
//               >
//               </input>
//               <br>
//               <label>Description</label>
//               <textarea 
//               required>
//               </textarea>
//               <br>
//               <label>Choose city the spot belongs to</label>
//               <br>
//               <select>
//                 <option value="Stockholm">Stockholm</option>
//                 <option value="Göteborg">Göteborg</option>
//                 <option value="Malmö">Malmö</option>
//               </select>
//               <button>Add card</button>
//               <p>${ title }</p>
//           </div>
//           <div className="card-stats"></div>
//           </div>`;
    
return(
    <>
    
         {arr.forEach(spot => {
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
