import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Carousel from './Carousel';
import NewsLetter from './NewsLetter';
import ServicesHome from './ServicesHome';
import WorkWithUs from './WorkWithUs';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Carousel/>
            <ServicesHome services={services}/>
            <NewsLetter></NewsLetter>
            <WorkWithUs/>
        </div>
    );
};

export default Home;