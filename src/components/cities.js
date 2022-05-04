


function CityList({cities}) {
    //Check if its not an array if so set prop to a singel element array. (For singel objects)
    if (!Array.isArray(cities)){
        cities = [cities];
    }
    // console.log(trips[0].spot);
    let data = cities[0].data;
    let output = '';
return(
    <>
         {data.forEach(city => {output +=`
        <div class="card">
            <div class="card-image" style="background: url(${city.image})"></div>
          <div class="card-text">
              <span class="date">4 days</span>
              <h2>${city.name}</h2>
              <p>${city.description}</p>
          </div>
          <div class="card-stats"></div>
          </div>`
             
          document.getElementById('body').innerHTML = output;
         })}
        
     
    </>
    
)
 

 
}

export default CityList;
