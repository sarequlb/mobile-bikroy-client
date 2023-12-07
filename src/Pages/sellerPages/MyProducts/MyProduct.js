import React from 'react';
import { Link } from 'react-router-dom';

const MyProduct = ({ myProduct }) => {
    const { model, image,location,date,price,_id } = myProduct;
    return (
        <div>
             <Link to={`/allProducts/product/${_id}`}>
                <div className="card card-side bg-base-100 shadow-xl hover:border-4 h-full">
                    <figure><img className='w-40 p-2' src={image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{model}</h2>
                        <p>{location},Mobile Phones</p>
                        <p>Tk {price}</p>
                        <div className="card-actions justify-end">
                            <p>Post Date: {date.slice(0,10)}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MyProduct;