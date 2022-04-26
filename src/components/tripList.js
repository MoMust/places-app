

function TripList({trips}) {
return(
     <div  className="trip-list">
         {trips.map((trip)=>(
             <div key={trip.id} className='row head-row p-0 m-0 mt-5'>
                <div className="card-wrapper col-6">
                    <div className="name col-12 mb-2">
                        <p>{trip.name}</p>
                    </div>
                    
                    <div className="img col-12">
                        <img className='exact-img' src={trip.image}></img>
                    </div>
                </div>
                
                <div className="description-wrapper col-6">
                <div className="desc">
                    <p className="mb-0">{trip.description}</p>
                    </div>
                </div>
                
          </div>
         ))}
     </div>
)
 

 
}

export default TripList;
