import React, { useState} from "react"

// Get saved city object id from local storage and save in variabel
let cityKey = localStorage.getItem('objId');
/**
 * @function CreateCard A function creates a new card/spot
 * @param {string} setCardName - Set user input name to be used in spots for POST request
 * @param {string} setCardDescription -  Set user input description to be used in spots for POST request
 *  @param {string} errorMessage - Takes a variabel containing a string of an error message
 */
function CreateCard({setCardName, setCardDescription, errorMessage }) {

//Set state based on what user inputs
const [name, setName] = useState("")
const [description, setDescription] = useState("")



// const [city, setCity] = useState("Stockholm")
let cityRefId = cityKey
let image =
  "https://res.cloudinary.com/dfqx0ptfj/image/upload/c_fit,w_202/v1653685815/creation-icon-20_byfbzv.png";
//Set state from inputs when updating card in Spots componenet
setCardName(name)
setCardDescription(description)

 //On submit make a POST request with info provided from user
 /**
  * Commentar
  * @function handleChange Makes a POST to database
  * @param {object} e Takes an event as a parameter
  */
 const handleChange = async (e)=>{
 
   //Prevent form from clearing input fields
  e.preventDefault();
  const card = {name, description, cityRefId, image}

 // Make a post of new card
  fetch(`http://localhost:8000/dataSpots`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(card)
  }).then(() =>{
    console.log('New spot added')
    window.location.reload();
  })

}

  return (
    <div className="card create-card">
      <div className="card-image"></div>
      <div className="card-text card-text-area">
        <h2>Create new spot</h2>
        <form onSubmit={handleChange}>
          <label>
            Spot title{" "}
            <span style={{ fontStyle: "italic", fontSize: "15px" }}>
              (max 20 char)
            </span>
          </label>
          <input
            placeholder="Type title here..."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            maxLength="20"
          ></input>
          <br></br>
          <label>
            Description{" "}
            <span style={{ fontStyle: "italic", fontSize: "15px" }}>
              (max 313 char)
            </span>
          </label>
          <textarea
            placeholder="Type description here..."
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            maxLength="313"
          ></textarea>
          <br></br>
          <div className="create-card-errorMessage">{errorMessage}</div>
          <button>Add card</button>
        </form>
      </div>
    </div>
  );
  }

export default CreateCard
