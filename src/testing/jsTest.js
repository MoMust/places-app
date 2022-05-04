


function CityList({cities}) {
    //Check if its not an array if so set prop to a singel element array. (For singel objects)
    if (!Array.isArray(cities)){
        cities = [cities];
    }
    // console.log(trips[0].spot);
    let data = cities[0].trips;
    let output = '';
return(
    <>
        <div class="trip-list row">
    
         {data.forEach(city => {output +=`
         <div class='row p-0 m-0 mt-5'>
                <div class="card-wrapper col-6 ">
                    <div class="name col-12 mb-2">
                        <p>${city.name}</p>
                    </div>
                    
                    <div class="img col-12">
                        <img class='exact-img' src=${city.image}></img>
                    </div>
                </div>
                
                <div class="description-wrapper col-12">
                <div class="desc">
                    <p class="mb-0">${city.description}</p>
                    </div>
                </div>
                
          </div>`
             
          document.getElementById('body').innerHTML = output;
         })}
        
     </div>
    </>
    
)
 

 
}

export default CityList;
