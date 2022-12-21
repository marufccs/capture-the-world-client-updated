import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../UserContext/UserContext';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();

    const {loading} = useContext(AuthContext);
    
    if(loading){
        return <button className="btn loading">loading</button>
      }
    
    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div>
                <h1 className='font-semibold text-3xl lg:text-5xl  mb-6'>All Services We Offer</h1>
                <div className='grid gap-6 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
                </div>
            </div>
        </div>
    );
};

export default Services;