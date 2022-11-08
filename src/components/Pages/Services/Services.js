import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <div>
                <h1 className='text-5xl font-semibold mb-6'>All Services We Offer</h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
                </div>
            </div>
        </div>
    );
};

export default Services;