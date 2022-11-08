import React from 'react';
import { Link } from 'react-router-dom';

const ServiceAll = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-8">
  <figure><img src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='font-semibold text-left'>{description.slice(0, 100)+'...'}<Link className='text-cyan-800' to="/services"><span>Read More</span></Link></p>
    <div className="card-actions justify-between">
        <h4 className='text-3xl font-semibold'>Price: €{price}</h4>
      <button className="btn bg-cyan-800">Get It Now</button>
    </div>
  </div>
</div>
    );
};

export default ServiceAll;