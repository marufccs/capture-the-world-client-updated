
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const data = useLoaderData();
    
    console.log(data);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
            <div className="card-body">
              <h2 className="card-title"></h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ServiceDetails;