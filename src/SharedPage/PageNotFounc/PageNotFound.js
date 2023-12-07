import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <div className='flex justify-center text-center items-center m-96'>
                <div>
                    <h1 className='text-2xl'>OOPS</h1>
                    <h1 className='my-2'>404 - PAGE NOT FOUND</h1>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unvailable</p>
                    <button className='btn my-5 btn-accent'><Link className='text-white text-decoration-none' to={'/'}>Go To Home Page</Link></button>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;