import React from 'react';
import Navbar from '../../SharedPage/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../SharedPage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;