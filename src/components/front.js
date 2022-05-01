import ImgCover from '../icons/travel-world-map.jpg'
import '../css/front.css'
function Front() {
  return (
    <div >
     <header>
      <img className='img-cover' src={ImgCover}></img>
     </header>
    </div>
  );
}

export default Front;
