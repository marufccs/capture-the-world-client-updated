
import React, { useContext } from 'react';
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../UserContext/UserContext';

const ServiceDetails = () => {
  
  const data =  useLoaderData();
  const {name, img, description, price} = data;

    const location = useLocation();

    const {user, loading} = useContext(AuthContext);

    if(loading){
      return <button className="btn loading">loading</button>
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album"/></figure>
            <div className="card-body">
              <h2 className="text-center text-6xl">{name}</h2>
              <p>{description}</p>
              <div>
                <h4 className='text-3xl'>Price: €{price}</h4>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-5xl font-semibold mt-12'>Reviews</h2>
          </div>
          {
            user && user.uid?
            <form >
            <h2 className='my-6'>Leave your own review</h2>
            <input type="text" placeholder="Your Name" className="input input-bordered input-info w-full max-w-xs mb-6" /> <br />
            <input type="email" placeholder="Your email" className="input input-bordered input-info w-full max-w-xs mb-6" defaultValue={user?.email}/> <br />
            <input type="text" alt='' placeholder="Your image URL" className="input input-bordered input-info w-full max-w-xs mb-6" /> <br />
            <textarea className="textarea textarea-accent px-20 mb-4" placeholder="Your review"></textarea> <br />
            <button className='btn bg-cyan-800 px-32 mb-12'>Submit</button>
          </form> 
             :
             <h3 className='font-semibold text-3xl my-6'>Please <Link className='text-cyan-800 underline underline-offset-8' to='/signin' state={{from: location}} replace> log in </Link>to add a review</h3>
          }
        </div>
    );
};

export default ServiceDetails;