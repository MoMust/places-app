import {Link} from 'react-router-dom'


function CityList({cities}) {
    //Check if its not an array if so set prop to a singel element array. (For singel objects)
    if (!Array.isArray(cities)){
        cities = [cities];
    }
    // console.log(trips[0].spot);
    
return(
    <>
    
    <div  className="trip-list row">
         
         {cities.map((city)=>(
             
                  <Link to='/Places' key={city.id} className='row head-row p-0 m-0 mt-5'>
                <div className="card-wrapper col-6">
                    <div className="name col-12 mb-2">
                        <p>{city.name}</p>
                    </div>
                    
                    <div className="img col-12">
                        <img className='exact-img' src={city.image}></img>
                    </div>
                </div>
                
                <div className="description-wrapper col-6">
                <div className="desc">
                    <p className="mb-0">{city.description}</p>
                    </div>
                </div>
                
          </Link>
            
         ))}
     </div>
    </>
    
)
 

 
}

export default CityList;
