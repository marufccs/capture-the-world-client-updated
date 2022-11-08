
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const data =  useLoaderData();
    const {name, img, description, price} = data;
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
        </div>
    );
};

export default ServiceDetails;