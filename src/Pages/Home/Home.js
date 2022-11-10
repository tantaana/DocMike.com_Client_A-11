import React from 'react';
import AllTitle from '../../Hooks/AllTitle';
import Services from '../Services/Services';
import Hero from './Hero';
import Carousel from './Hero';

const Home = () => {
    AllTitle('Home')
    return (
        <div className='mt-20'>
            <Hero></Hero>
            <Services></Services>

        </div>
    );
};

export default Home;