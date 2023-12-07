import React from 'react';

const MyBuyer = ({myBuyer}) => {
    console.log(myBuyer)
    const {sellerEmail,image,price,email,name,model} = myBuyer
    return (
        <div>
             <div className="card card-side bg-base-100 shadow-xl hover:border-4 h-full">
                    <figure><img className='w-40 p-2' src={image} alt="Movie" /></figure>
                    <div className="card-body">
                        <p>Name:{name}</p>
                        <p>Model:{model}</p>
                        <p>Tk:{price}</p>
                        <p>Email: {email}</p>
                        <p>Seller Email: {sellerEmail}</p>
                    </div>
                </div>
        </div>
    );
};

export default MyBuyer;