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
        console.log(attr);
        output +=`
         <div class='row d-flex justify-content-center head-row p-0 m-0'>
                <div class="card-wrapper row d-flex p-0 m-0 col-6">
                    <div class="name col-12">
                        <p>Stockholm</p>
                    </div>
                    
                    <div class="img col-12 ">
                        <img class='exact-img' src=${image}>
                    </div>
                </div>
                
                <div class="description col-6">
                    <p>Description</p>
                    <p>Et eiusmod nisi tempor veniam duis voluptate esse. Lorem occaecat consectetur id quis cillum minim excepteur do dolore adipisicing culpa nulla elit. Incididunt non sunt amet adipisicing amet. Excepteur consequat velit ad anim est eu proident.</p>
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
      <div id ="output">
        
      </div>
      
    </div>
  );
}

export default Browser;
