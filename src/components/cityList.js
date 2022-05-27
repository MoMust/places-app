let cityKey = '';
//Function get and save cityKey on click of specific city
//Save to localstorage
 window.getInfo =(props) =>{
    cityKey =  props
    localStorage.setItem('objId', cityKey);
     console.log(cityKey)
}

//Function/Component Get citites
function CityList({cities}) {
    //Check if its not an array if so set prop to a singel element array. (For singel objects)
    // if (!Array.isArray(cities)){
    //     cities = [cities];
    // }
    let data = cities;
    let output = '';
    // console.log("cities")
    // console.log(data);
    /* Run foreach for every object from the data passed to CityList */

    // for (let i = 0; i < data.length; i++) {
    //             let element = data[i];
    //             if(element.name == "Göteborg"){
    //                 data = element
    //             }
    //         }

            // console.log(data.name)
        if(Array.isArray(data)){
            


            data.forEach(city => {
                
                    output +=`
       <a href="./citySpots"><div class="card" onclick="getInfo(${city.cityId})">
            <div class="card-image" style="background: url(${city.image})"></div>
          <div class="card-text">
              <h2>${city.name}</h2>
              <p>${city.description}</p>
          </div>
          <div class="card-stats"></div>
          </div></a>`;
            
          //  Output all objects to body div in browser componentpåpå
            document.getElementById('render-objects').innerHTML = output;
         
                })
             
        }else{
            let name = data.name
            let description = data.description
            let cityId = data.cityId

            output += `<a href="./citySpots"><div class="card" onclick="getInfo(${cityId})">
            
          <div class="card-text">
              <span class="date">4 days</span>
              <h2>${name}</h2>
              <p>${description}</p>
          </div>
          <div class="card-stats"></div>
          </div></a>`;

          document.getElementById('render-objects').innerHTML = output;
        }
        
    
    
    
return(
    <>
         
    </>
    
)
}

export default CityList;
