// import Create from './create'
import { useState } from "react";
import swal from "sweetalert";

//Function/component - To get spots in each city
/**import swal from 'sweetalert';
 * @function spots function takes data from useFetch and shows only matched spots for city thats clicked on

 * @param {obj} spots - Data from fetch
 * @param {string} cardName - Gets the name of the card from createCard componenet, for POST request
 * @param {string} cardDescription - Gets the description of the card from createCard componenet, for POST request
 */
// Get saved city id from browser page and save in variabel
let cityKey = localStorage.getItem("objId");

function Spots({ spots, cardName, cardDescription, setErrorMessage }) {
  //Check if its not an array if so set prop to a singel element array. (For singel objects)
  const [error, setError] = useState("");
  let cityData = spots;
  let arr = [];
  let output = "";
  let message = "";
  // console.log('Citydata')
  // console.log(cityData)

  //To get spots related to city
  //Chek if cityKey matches spots reference key

  for (let i = 0; i < cityData.length; i++) {
    //Key do not match
    if (cityKey != cityData[i].cityRefId) {
      // console.log('no match')
      continue;
      //Key matches, create an array with matching objects
    } else {
      // console.log(cityData[i])
      arr.push(cityData[i]);
    }
  }
  // console.log(cityKey)
 
  //DELETE of card when delete button is clicked
  window.handleClickDel = async (id) => {
    if (await swal("Are you sure you want to delete this spot?", {
  buttons: ['no, save it!', 'Yes, delete post!']
})) {
      fetch("http://localhost:8000/dataSpots/" + id, {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
      });
    }
  };
  //Make an update of card when update button is clicked
  window.handleClickUpd = (id) => {
    if (cardName == "" && cardDescription == "") {
      message = "You have to input name and/-or description";
      setError(message);
      // Send pop up message
    swal('You have to input name and/-or description at the form')
    } else {
      fetch(`http://localhost:8000/dataSpots/` + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cardName,
          description: cardDescription,
          cityRefId: cityKey,
        }),
      }).then(() => {
        console.log("Spot updated");
        window.location.reload();
      });
    }
  };
  setErrorMessage(error);
  return (
    <>
    {/* Creates dynamic HTML of data */}
      {arr.forEach((spot) => {
        //  console.log(spot)

        output += `
       <div class="card">
            <div class="card-image" style="background: url(${spot.image})"></div>
          <div class="card-text">
              <h2>${spot.name}</h2>
              <p>${spot.description}</p>
              <button id="btn" onclick="handleClickDel(${spot.id})">Delete</button>
              <button id="btnUpd" onclick="handleClickUpd(${spot.id})">Update</button>
          </div>
          
          </div>`;
          // Send HTML to spotsPage componenet for rendering card
        document.getElementById("render-objects").innerHTML = output;
      })}
    </>
  );
}

export default Spots;
