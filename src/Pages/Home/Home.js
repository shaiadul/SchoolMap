import React from 'react';
import Footer from '../Shared/Footer';
import Carousal from './Carousal';
import ChackInfo from './ChackInfo';
import Teacher from './Teacher';

const Home = () => {
    return (
        <div>
            <Carousal/>
            <Teacher/>
            <ChackInfo/>
            <Footer/>
        </div>
    );
};

export default Home;