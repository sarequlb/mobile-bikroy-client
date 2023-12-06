import React from 'react';

const MyProduct = ({ myProduct }) => {
    const { model, image,date } = myProduct;
    return (
        <div>
            <div className="card p-5 w-full lg:card-side bg-base-100 shadow-xl h-full">
                <figure><img className=' w-4/5' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{model}</h2>
                    <p>Post Date: {date.slice(0,10)}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;