import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='py-5'>
            <div className="hero h-96" style={{ backgroundImage: 'url(https://www.paktales.com/wp-content/uploads/2019/10/featured-image-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Mobile Bikroy</h1>
                        <p className="mb-5">Mobile Bikroy is a platform on which you can buy and sell almost everything! Use the location selector to find deals close to you or check out</p>
                        <Link to={'/'}><button className="btn btn-primary">Sell Here</button></Link>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src="https://digitell.me/wp-content/uploads/2023/03/digitell_EX.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">About Mobile Bikroy</h1>
                        <p className="py-6 w-1/2"> Mobile Bikroy has the widest selection of items all over Bangladesh and across more than 50 different categories.Whether you're looking for a  mobile phone,  you will find the best deal on Mobile Bikroy. </p>
                        <Link to={'/'}><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;