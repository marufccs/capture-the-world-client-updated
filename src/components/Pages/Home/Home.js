import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from './Carousel';
import NewsLetter from './NewsLetter';
import ServicesHome from './ServicesHome';
import WorkWithUs from './WorkWithUs';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Carousel/>
            <ServicesHome services={services}/>
            <NewsLetter></NewsLetter>
            <WorkWithUs/>
        </div>
    );
};

export default Home;