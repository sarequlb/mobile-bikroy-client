import React, { useState } from 'react';
import { FcRating } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

const CustomerReview = ({ reviews }) => {
    const { _id, comment, rating, name } = reviews;
    // console.log(reviews)

    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{comment}</p>
                    <div className="card-actions justify-between mt-5">
                        <div className='flex justify-center items-center gap-2'>
                            <p className="">{rating}</p>
                            <span><FcRating /></span>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='flex justify-center items-center gap-2'>
                                <button className=""><AiFillLike /></button>
                                <p className='text-sm'>Like 0</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <button className=""><FaRegComments /></button>
                                <p className='text-sm'>Comment 0</p>                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <button className=""><CiShare2 /></button>
                                <p className='text-sm'>Share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;