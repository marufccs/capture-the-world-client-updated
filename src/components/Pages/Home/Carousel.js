import React from 'react';
import './Carousel.css';

const Carousel = () => {
    return (
<div>
<div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://www.vershinin.biz/thumbs/960/infinity.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="http://www.clickitupanotch.com/wp-content/uploads/2012/05/IMG_7162edit.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://wallpaperaccess.com/full/346725.jpg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 

      </div>
      <div className='text-left text-5xl slider-texts'>
    <h1 className=' font-bold '>LIFE IS SHORT</h1>
    <h1 className=' font-bold '>CAPTURE EVERY MOMENT</h1>
  </div>
</div>
    );

};

export default Carousel;