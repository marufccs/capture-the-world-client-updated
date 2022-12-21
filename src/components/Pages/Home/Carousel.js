import React from 'react';
import './Carousel.css';

const Carousel = () => {
    return (
<div>
<div className="carousel w-full mt-6 slider-img">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.pinimg.com/originals/ce/38/bf/ce38bfeb16258c2f3987f357756e6a50.png" className='w-full rounded-lg '/>
          
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="http://www.clickitupanotch.com/wp-content/uploads/2012/05/IMG_7162edit.jpg" className="w-full rounded-lg " />
         
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img className='w-full rounded-lg ' src="https://wallpaperaccess.com/full/346725.jpg" />
         
        </div> 

      </div>
      <div className='text-left text-5xl slider-texts carousel-text'>
    <h1 className=' font-bold '>LIFE IS SHORT</h1>
    <h1 className=' font-bold '>CAPTURE EVERY MOMENT</h1>
  </div>
</div>
    );

};

export default Carousel;