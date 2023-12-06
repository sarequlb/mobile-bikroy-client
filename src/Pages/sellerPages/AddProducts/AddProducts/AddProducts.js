import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import useVerify from '../../../../hooks/useVerify';

const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const date = new Date()
    // console.log(date)

    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data;
        }

        
    })

    const [isVerify] = useVerify(user?.email)
    console.log(isVerify)

    const { register, handleSubmit, formState: { errors } } = useForm()
    const handlePost = (data) => {

        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image);

        const url = 'https://api.imgbb.com/1/upload?key=16612783c60b3795ca45e1987bb6938c'
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if(imgData.success){
                    const postData = {
                        name:data.name,
                        email:data.email,
                        image:imgData.data.url,
                        model:data.model,
                        RamRom:data.ramRom,
                        PurchaseYear:data.purchaseYear,
                        price:data.price,
                        brand:data.brandName,
                        mobile:data.mobile,
                        location:data.location,
                        description:data.description,
                        date:date,
                        verify:isVerify
                    }
                    //save post info to the db
                    fetch('http://localhost:5000/allProducts',{
                        method:'POST',
                        headers:{
                            'content-type': 'application/json'
                        },
                        body:JSON.stringify(postData)
                    })

                    .then(res => res.json())
                    .then(data=> {
                        console.log(data)
                        if(data.acknowledged){
                            toast.success('Successfully Posted')
                        }
                    })
                }
            })

    }
    return (
        <div className='mt-20'>
            <h1 className='text-2xl font-bold text-center'>Add Your <span className='text-red-700'>Item</span></h1>
            <h1 className='font-bold mt-5 border-b-2 p-2'>Fill in the details</h1>
            <form onSubmit={handleSubmit(handlePost)} className=" lg:px-40 py-20">
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-5 lg:mx-0 mx-20'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <select selected {...register('brandName', { required: "brand option is required" })} className="select select-bordered ">
                            <option disabled selected></option>
                            {
                                categories?.map(category => <option key={category._id} value={category.category_name} >{category.category_name}</option>)
                            }
                        </select>
                        {
                            errors.brandName && <p className='text-red-600'>{errors.brandName.message}</p>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Model</span>
                        </label>
                        <input {...register("model", {
                            required: 'model is required'
                        })} type="text" placeholder="" className="input input-bordered" required />
                        {
                            errors.model && <p className='text-red-600'>{errors.model.message}</p>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ram/Rom</span>
                        </label>
                        <input  {...register("ramRom", {
                            required: 'ramRom is required'
                        })} type="text" placeholder="" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Purchase Year</span>
                        </label>
                        <input  {...register("purchaseYear", {
                            required: 'purchaseYear is required'
                        })} type="text" placeholder="" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input  {...register("price", {
                            required: 'price is required'
                        })} type="text" placeholder="" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register('name', { required: "name option is required" })} type="text" placeholder="" defaultValue={user?.displayName} className="input input-bordered" required readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email', { required: "email option is required" })} type="text" placeholder="" defaultValue={user?.email} className="input input-bordered" required readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input  {...register("location", {
                            required: 'location is required'
                        })} type="text" placeholder="" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile</span>
                        </label>
                        <input  {...register("mobile", {
                            required: 'mobile is required'
                        })} type="text" placeholder="" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register("description", {
                            required: 'description is required'
                        })} className="textarea textarea-bordered " placeholder=""></textarea>
                    </div>
                    <div className="flex gap-10 lg:my-10 md:my-10">
                        <input className="file-input file-input-bordered file-input-info w-full max-w-xs"  {...register("img", {
                            required: 'image is required'
                        })} id='file' type="file" placeholder="" required />
                    </div>

                </div>
                <div className="form-control mt-10 w-20">
                    <button className="btn btn-primary">Post</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;