import { useState } from "react"

// import Nav from './nav';

// Get saved city object id from browser page and save in variabel
let cityKey = localStorage.getItem('objId');
function createCard() {

const [name, setName] = useState("")
const [description, setDescription] = useState("")
// const [city, setCity] = useState("Stockholm")
let cityRefId = cityKey

 
 const handleChange = (e)=>{
  e.preventDefault();
  const card = {name, description, cityRefId}
  console.log(card);
  console.log(cityKey)
 
  fetch(`http://localhost:8000/spots`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(card)
  }).then(() =>{
    console.log('New spot added')
  })
  
}


  return (

   <div className="card create-card">
            <div className="card-image"></div>
          <div className="card-text card-text-area">
              
              <h2>Create new spot</h2>
              <form onSubmit={handleChange}>
              <label>Spot title</label>
              <input
              required
              value={name}
              onChange={(e) =>setName(e.target.value)}
              type="text" 
              >
              </input>
              <br></br>
              <label>Description</label>
              <textarea 
               required
              value={description}
              onChange={(e) =>setDescription(e.target.value)}
              type="text" >
              </textarea>
              <br></br>
              <label>Choose city the spot belongs to</label>
              <br></br>
              {/* <select
              value= {city}
              onChange={(e) => setCity(e.target.value)}>
                <option value="Stockholm">Stockholm</option>
                <option value="Göteborg">Göteborg</option>
                <option value="Malmö">Malmö</option>
              </select> */}
              <button >Add card</button>
              <p>{ name }</p>
              <p>{ description }</p>
              {/* <p>{ city }</p> */}
              </form>
          </div>
    </div>
          
  )
  }

export default createCard
