import React from 'react';

const MyBooking = ({ booking }) => {
    console.log(booking)
    const {model,_id,image,price,email} = booking;
    return (
        <div>
                <div className="card card-side bg-base-100 shadow-xl hover:border-4 h-full">
                    <figure><img className='w-40 p-2' src={image} alt="Movie" /></figure>
                    <div className="card-body">
                        <p>Model{model}</p>
                        <p>Tk {price}</p>
                        <p>Email: {email}</p>
                    </div>
                </div>
        </div>
    );
};

export default MyBooking;