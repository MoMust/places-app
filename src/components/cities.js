let cityKey = '';
//Function get and save cityKey on click of specific city
 window.getInfo =(props) =>{
    cityKey =  props
    localStorage.setItem('objId', cityKey);
     console.log(cityKey)
}

//Function/component Get citites
function CityList({cities}) {
    //Check if its not an array if so set prop to a singel element array. (For singel objects)
    if (!Array.isArray(cities)){
        cities = [cities];
    }
    let data = cities;
    let output = '';
    console.log("cities")
    console.log(cities);
    
return(
    <>
         {data.forEach(city => {
            //  cityKey = city.cityId
             output +=`
       <a href="./citySpots"><div class="card" onclick="getInfo(${city.cityId})">
            <div class="card-image" style="background: url(${city.image})"></div>
          <div class="card-text">
              <span class="date">4 days</span>
              <h2>${city.name}</h2>
              <p>${city.description}</p>
          </div>
          <div class="card-stats"></div>
          </div></a>`;
             
          document.getElementById('body').innerHTML = output;
         })}
    </>
    
)
}

export default CityList;
