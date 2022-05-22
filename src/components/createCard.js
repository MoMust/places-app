import { useState} from "react"

// Get saved city object id from browser page and save in variabel
let cityKey = localStorage.getItem('objId');
function createCard({setCardName, setCardDescription}) {
//Set state based on what user inputs
const [name, setName] = useState("")
const [description, setDescription] = useState("")
// const [city, setCity] = useState("Stockholm")
let cityRefId = cityKey
//Set state from inputs when updating card in Spots componenet
setCardName(name)
setCardDescription(description, cityKey)
 //On submit make a POST request with info provided from user
 const handleChange = async (e)=>{
   //Prevent form from clearing input fields
  e.preventDefault();
  const card = {name, description, cityRefId}
  
  // console.log(card);
  // console.log(cityKey)
 // Make a post of new card
  fetch(`http://localhost:8000/dataSpots`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(card)
  }).then(() =>{
    console.log('New spot added')
    location.reload();
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
            placeholder="Type title here.."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          ></input>
          <br></br>
          <label>Description</label>
          <textarea
            placeholder="Type description here.."
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          ></textarea>
        
          <br></br>

          <button>Add card</button>
          <p>{name}</p>
          <p>{description}</p>
        </form>
      </div>
    </div>
  );
  }

export default createCard
