import React from 'react';


const AddReview = () => {
    return (
        <div className='mb-40'>
            <div className="text-center mb-10">
                <h1 className="text-2xl font-bold">Say something about us</h1>
            </div>
            <div>
                <form className="bg-gray-600 px-10 py-10 rounded w-96 mx-auto">
                    <div className="form-control">
                        <textarea className="textarea textarea-bordered" placeholder="comment"></textarea>
                    </div>
                    <div className="form-control mt-5">
                        <input type="text" placeholder="rating" className="input input-bordered" required />
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