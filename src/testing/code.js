// Post request version 2
import Axios from 'axios'
const url = "http://localhost:8000/cities";
const [data, setData] = useState({
  name: '',
  description: '',
  cityRefId: cityKey
})
function submit(e){
e.preventDefault();

Axios.post(url, {
  name: data.name,
  description: data.description,
}).then(res=>{
  console.log(res.data)
})
}
function handleChange(e){
const newData = {...data}
newData[e.target.id] = e.target.value
setData(newData)
console.log(newData)
}


//  <div className="card create-card">
//             <div className="card-image"></div>
//           <div className="card-text card-text-area">
              
//               <h2>Create new spot</h2>
//               <form onSubmit={(e) =>submit(e)}>
//               <label>Spot title</label>
//               <input
//               required
//               value={data.name}
//               onChange={(e) =>handleChange(e)}
//               id="name"
//               type="text" 
//               >
//               </input>
//               <br></br>
//               <label>Description</label>
//               <textarea 
//                required
//               value={data.description}
//               onChange={(e) =>handleChange(e)}
//               id="description"
//               type="text" >
//               </textarea>
//               <br></br>
//               <label>Choose city the spot belongs to</label>
//               <br></br>
              
//               <button >Add card</button>
//               <p>{ data.name }</p>
//               <p>{ data.description }</p>
//               {/* <p>{ city }</p> */}
//               </form>
//           </div>
//     </div>
// --------------------------------------------------------------------------