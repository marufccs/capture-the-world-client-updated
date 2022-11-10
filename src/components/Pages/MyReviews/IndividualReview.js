import React from 'react';

const IndividualReview = ({myReview, handleDelete}) => {
   
    const {_id, name, email, img, review}  = myReview;


    return (
        <div>
             <div className="card w-96 bg-slate-200 shadow-xl mx-auto my-12">
  <div className="card-body">
    <h2 className="">
    <div className='flex justify-center'>
        <div className='mr-2'> 
       {myReview && img? <img className='image' src={img} alt="" />  : <img className='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1481px-Anonymous.svg.png' alt=''/> }
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
  <div className='flex justify-between px-24 mb-2'>
    <button className='btn bg-cyan-600'>Update</button>
    <button onClick={()=> handleDelete(_id)} className='btn bg-red-700'>Delete</button>
  </div>
</div>
        </div>
    );
};

export default IndividualReview;