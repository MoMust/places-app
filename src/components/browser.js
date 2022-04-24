import '../css/browser.css';
import image from '../testing/image.jpg';

function Browser() {

  async function renderObjects(){
    //  let productTypeApi = 'Countries';
    let apiUrl = 'http://localhost:1337';
    

    let urlLocalhost = apiUrl + '/api/Cities?populate=image';

    //Fetch
    let urlResponse = await fetch(urlLocalhost);
    let productObject = await urlResponse.json();
    let output = '';
    // kvart i 4 obelsiken slottsbacken

    //Check if array
    if(Array.isArray(productObject.data)){
      productObject.data.forEach(element => {
        let attr = element.attributes;
        let img = attr.image.data.attributes.formats.medium.url;
        console.log(attr);
        output +=`
         <div class='row head-row p-0 m-0 mt-5'>
                <div class="card-wrapper col-6">
                    <div class="name col-12 mb-2">
                        <p>${attr.name}</p>
                    </div>
                    
                    <div class="img col-12">
                        <img class='exact-img' src=${img}>
                    </div>
                </div>
                
                <div class="description-wrapper col-6">
                <div class="desc">
                    <p class="mb-0">${attr.description}</p>
                    </div>
                </div>
                
          </div>
        `
        document.getElementById('output').innerHTML = output;
      });
    }
  }
  renderObjects();
  return (
    <div id='body'>
      <div id ="output" className='row'>
        
      </div>
      
    </div>
  );
}

export default Browser;
