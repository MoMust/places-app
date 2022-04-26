

function Browser({trips}) {
return(
     <div className="trip-list">
         {trips.map((trip)=>(
             <div class='row head-row p-0 m-0 mt-5'>
                <div class="card-wrapper col-6">
                    <div class="name col-12 mb-2">
                        <p>{trip.name}</p>
                    </div>
                    
                    <div class="img col-12">
                        <img class='exact-img' src={trip.image}></img>
                    </div>
                </div>
                
                <div class="description-wrapper col-6">
                <div class="desc">
                    <p class="mb-0">{trip.description}</p>
                    </div>
                </div>
                
          </div>
         ))}
     </div>
)
 

 
}

export default Browser;
