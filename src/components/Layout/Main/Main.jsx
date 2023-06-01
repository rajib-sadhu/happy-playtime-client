import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[500px]' >
                <Outlet />
            </div>
            <Footer />

        </div>
    );
};

export default Main;