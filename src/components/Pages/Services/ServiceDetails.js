
import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../UserContext/UserContext';
import Review from './Review';
import './ServiceDetails.css'

const ServiceDetails = () => {


  const data =  useLoaderData();
  
  const [reviews, setReviews] = useState([])

  // const {_id, name, img, description, price} = data;
  const serviceId = data._id;


  useEffect(() => {
    fetch(`https://capture-the-world-server.vercel.app/reviews?serviceId=${serviceId}`)
    .then(res => res.json())
    .then(data => setReviews(data))
  },[serviceId])

    const location = useLocation();

    const {user, loading} = useContext(AuthContext);

    if(loading){
      return <button className="btn loading">loading</button>
    }

    const handleReviews = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const img = form.image.value;
      const review = form.review.value;
      const wholeReview = {name, email, img, review, serviceId};
      console.log(wholeReview);
      fetch('https://capture-the-world-server.vercel.app/reviews', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(wholeReview)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.acknowledged){
          Swal.fire(
            'Good Job!',
            "Your review has been added successfully!",
            'success'
          )
        }
        form.reset();
      })
      
      
    }


    return (
        <div>
            <div className="mt-6 card bg-base-100 shadow-xl lg:w-11/12 lg:relative lg:left-16">
            <figure><img src={data.img} alt="Album"/></figure>
            <div className="card-body">
              <h2 className="text-center text-4xl lg:text-6xl">{data.name}</h2>
              <p className='text-justify'>{data.description}</p>
              <div>
                <h4 className='text-3xl'>Price: €{data.price}</h4>
              </div>
              <div className="card-actions justify-end">
                <button className='btn bg-cyan-800 get-it-now-button'><Link to='/contactus'>Get It Now</Link></button>
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-5xl font-semibold mt-12'>Reviews</h2>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-8'>
           {
            reviews.map(rev => <Review key={rev._id} rev={rev}></Review>)
           }
          </div>
          {
            user && user.uid?
            <form onSubmit={handleReviews}>
            <h2 className='my-6'>Leave your own review</h2>
            <input type="text" placeholder="Your Name" name='name' className="input input-bordered input-info w-full max-w-xs mb-6" required /> <br />
            <input type="email" placeholder="Your email" name='email' className="input input-bordered input-info w-full max-w-xs mb-6" required defaultValue={user?.email} /> <br />
            <input type="text" alt='' placeholder="Your image URL" name='image' className="input input-bordered input-info w-full max-w-xs mb-6" /> <br />
            <textarea name='review' className="textarea textarea-accent px-20 mb-4" placeholder="Your review" required></textarea> <br />
            <button className='btn bg-cyan-800 px-32 mb-12'>Submit</button>
          </form> 
             :
             <h3 className='font-semibold text-3xl my-6'>Please <Link className='text-cyan-800 underline underline-offset-8' to='/signin' state={{from: location}} replace> log in </Link>to add a review</h3>
          }
        </div>
    );
};

export default ServiceDetails;