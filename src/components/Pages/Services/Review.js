import React, { useContext } from 'react';
import { AuthContext } from '../../../UserContext/UserContext';
import './Review.css';

const Review = ({rev}) => {

    const {loading} = useContext(AuthContext);
    if(loading){
        return <button className="btn loading">loading</button>
    }
    
    const {img, name, email, review} = rev;
    return (
    <div className="card w-80 bg-base-100 shadow-xl mx-auto my-12">
  <div className="card-body">
    <h2 className="">
    <div className='flex justify-center'>
        <div className='mr-2'> 
       {rev && img? <img className='image' src={img} alt="" />  : <img className='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1481px-Anonymous.svg.png' alt=''/> }
        </div>
        <div>
        <h4>{name}</h4>
        </div>
            </div>
    </h2>
    <h3 className='text-cyan-800'>
        {email}
    </h3>
    <p>{review}</p>
  </div>
</div>
    );
};

export default Review;