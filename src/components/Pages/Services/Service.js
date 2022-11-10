import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiX } from "react-icons/hi";

const Service = ({service}) => {
    const {_id, name, img, price, description} = service;
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const handleImage = img => {
      setTempImgSrc(img);
      setModel(true);
    }
    return (
        <div>
             <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-8">
             <div className={model? "model open":"model"}>
             <img src={tempImgSrc} alt=""></img>
      <HiX onClick={() => setModel(false)}></HiX>
      </div>
      <div onClick={()=> handleImage(img)}>
  <figure><img className='cursor-pointer rounded'  src={img} alt="" /></figure> </div>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='font-semibold text-left'>{description.slice(0, 100)+'...'}<Link className='text-cyan-800' to={`/services/${_id}`}><span>Read More</span></Link></p>
    <div className="card-actions justify-between">
        <h4 className='text-3xl font-semibold'>Price: €{price}</h4>
      <button className="btn bg-cyan-800"><Link to='/contactus'>Get It Now</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;