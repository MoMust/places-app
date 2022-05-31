let cityKey = "";
//Function get and save cityKey on click of specific city
//Save to localstorage
/**
 * Gets and saves city id to a variabel called cityKey to store in local storage
 * 
 * @param {number} props Takes city object id
 */
 window.getInfo = (props) => {
  cityKey = props;
  localStorage.setItem("objId", cityKey);
  console.log(cityKey);
};

/**
 * @function CityList A function/component that gets all cities
 * @param {object} cities - Data generated from useFetch component
 * @returns Template literal - HTML to DOM
 */
function CityList({ cities }) {
  //Check if its not an array if so set prop to a singel element array. (For singel objects)
  // if (!Array.isArray(cities)){
  //     cities = [cities];
  // }
  let data = cities;
  let output = "";
  // console.log("cities")
  // console.log(data);

  /* Run foreach for every object from the data passed to CityList */

  if (Array.isArray(data)) {

    data.forEach((city) => {
      output += `
       <a href="./citySpots"><div class="card" onclick="getInfo(${city.cityId})">
            <div class="card-image" style="background: url(${city.image})"></div>
          <div class="card-text">
              <h2>${city.name}</h2>
              <p>${city.description}</p>
          </div>
          <div class="card-stats"></div>
          </div></a>`;

      //  Output all objects to body div in browser component
      document.getElementById("render-objects").innerHTML = output;
    });
  } else {
    let name = data.name;
    let description = data.description;
    let cityId = data.cityId;

    output += `<a href="./citySpots"><div class="card" onclick="getInfo(${cityId})">
            
          <div class="card-text">
              <span class="date">4 days</span>
              <h2>${name}</h2>
              <p>${description}</p>
          </div>
          <div class="card-stats"></div>
          </div></a>`;

    document.getElementById("render-objects").innerHTML = output;
  }
}

export default CityList;
