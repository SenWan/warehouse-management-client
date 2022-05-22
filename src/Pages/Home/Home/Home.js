import React from 'react';
import Banner from '../Banner/Banner';
import About from './About/About';
import Inventories from './Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <About></About>
        </div>
    );
};

export default Home;