import React from 'react';
import { Link } from 'react-router-dom';
import ServiceAll from './ServiceAll';

const ServicesHome = ({services}) => {
    return (
        <div>
            <div className='mb-6 text-5xl font-medium'>
                <h1>Services</h1>
            </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 '>
            {
                services.map(service => <ServiceAll key={service._id} service={service}></ServiceAll>)
            }
        </div>
        <div>
           <Link to='/services'><button className='btn bg-cyan-800 mb-6'>Show All</button></Link> 
        </div>
        </div>
    );
};

export default ServicesHome;