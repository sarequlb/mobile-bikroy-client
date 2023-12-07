import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';


const AddReview = () => {


    const {user} = useContext(AuthContext)
    const {register,handleSubmit} = useForm()
    const handleAddReview =(data) =>{

        const reviewData = {
            name:user?.displayName,
            comment:data.comment,
            rating:data.rating,
            email:user?.email
        }

        fetch('https://mobile-bikroy-server.vercel.app/reviews',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(reviewData)

        })
        .then(res=> res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Submitted Your Review')
            }
        })
    }

    return (
        <div className='mb-40'>
            <div className="text-center mb-10">
                <h1 className="text-2xl font-bold">Say something about us</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(handleAddReview)} className="bg-gray-600 px-10 py-10 rounded w-96 mx-auto">
                    <div className="form-control">
                        <textarea {...register("comment")} className="textarea textarea-bordered" required placeholder="comment"></textarea>
                    </div>
                    <div className="form-control mt-5">
                        <input {...register("rating")} type="text" placeholder="rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;