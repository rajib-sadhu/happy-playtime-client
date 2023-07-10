import React from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Shop from './Shop';
import Reviews from './Reviews';
import Sponsored from './Sponsored';
import useTitle from '../../Layout/useTitle';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Achivemnts from './Achivemnts';
// ..
AOS.init();

const Home = () => {

    useTitle('Home')

    return (
        <div>
            <Header />
            <div data-aos="flip-up" >
                <Gallery />
            </div>
            <Shop />
            <div data-aos='fade-right' >
                <Sponsored />
            </div>
            <Achivemnts />  
            <Reviews />
        </div>
    );
};

export default Home;