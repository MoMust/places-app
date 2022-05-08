import { useState } from "react"

// import Nav from './nav';


function createCard() {

const [title, setTitle] = useState("")
 const changeHandler = (e) =>{setTitle(e.target.value)};
  return (
   
    
   <div className="card create-card">
            <div className="card-image"></div>
          <div className="card-text card-text-area">
              
              <h2>Create new spot</h2>
              <form>
              <label>Spot title</label>
              <input
              required
              value={title}
              onChange={changeHandler}
              type="text" 
              >
              </input>
              <br></br>
              <label>Description</label>
              <textarea 
              required>
              </textarea>
              <br></br>
              <label>Choose city the spot belongs to</label>
              <br></br>
              <select>
                <option value="Stockholm">Stockholm</option>
                <option value="Göteborg">Göteborg</option>
                <option value="Malmö">Malmö</option>
              </select>
              <button>Add card</button>
              <p>{ title }</p>
              </form>
          </div>
    </div>
          
  )
  }

export default createCard
