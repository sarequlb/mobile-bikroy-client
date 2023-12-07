import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import UseSeller from '../../hooks/UseSeller';
import { useQuery } from 'react-query';
import { MdVerified } from "react-icons/md";
import { useForm } from 'react-hook-form';


const CategoryProductDetails = () => {
    const { user } = useContext(AuthContext)
    const products = useLoaderData()


    const [bookingData, setBookingData] = useState()

    const navigate = useNavigate()
    const { data: sellerType = [], isLoading } = useQuery({
        queryKey: 'sellerType',
        queryFn: async () => {
            const res = await fetch(`https://mobile-bikroy-server.vercel.app/allUsers/${user?.email}`)
            const data = res.json()
            return data
        }
    })


    const [isSeller] = UseSeller(user?.email)
    const { name, location, date, _id, image, model, description, RamRom, mobile, price, brand, PurchaseYear, email, booked } = products;



    const handleBookMobile = (id) => {

        console.log(bookingData)

        const bookingInfo = {
            name: user?.displayName,
            sellerEmail: email,
            email: user?.email,
            model,
            image,
            price,
            id,
            booked
        }

        console.log(bookingInfo)

        fetch('https://mobile-bikroy-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Successfully Booked')
                    fetch(`https://mobile-bikroy-server.vercel.app/allProducts/product/${id}`, {
                        method: 'PUT',
                        headers: {

                        }

                    })
                        .then(res => res.json())
                        .then(data => console.log(data))

                    navigate('/dashboard/myBooking')
                }
                else {
                    toast.error(data.message)
                }
            })
    }



    const handleAddToWishlist = (id) => {
        const wishlistData = {
            location,
            date,
            mobileId: _id,
            email: user?.email,
            image,
            model,
            price,

        }
        fetch('https://mobile-bikroy-server.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlistData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Successfully added on Wishlist')
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    if (isLoading) {
        return <div className='flex justify-center items-center my-40'>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
    </div>
    }

    return (
        <div className='py-20' >
            <div className=" w-2/4 mx-auto p-10">
                <div className="flex-col lg:flex-row flex justify-center gap-10 lg:items-start items-center">
                    <img src={image} className="bg-slate-400 max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="font-bold">For Sale By {name}</h1>
                        <div className='flex justify-center gap-2 items-center mt-2'>
                            <FiPhoneCall></FiPhoneCall>
                            <p>Call Seller</p>

                        </div>
                        <p className="py-1 font-bold text-center mt-2 rounded bg-slate-300 mb-5">{mobile}</p>
                        {
                            sellerType?.verify && <>
                                <div className='flex justify-center items-center gap-2'>
                                    <MdVerified className='text-green-600 text-2xl'></MdVerified>
                                    <p className='font-bold'>Verified Seller</p>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className='border-b-2 p-5 mt-10'>
                    <p>{model}</p>
                    <p>Posted on {date?.slice(0, 10)}, {location}</p>
                </div>
                <div>
                    <h1 className='font-bold text-lime-600 p-2'>Tk {price}</h1>
                    <p className='p-2'>Brand: {brand}</p>
                    <p className='p-2'>Ram/Rom: {RamRom}</p>
                    <p className='p-2'>Purchase Year: {PurchaseYear}</p>
                </div>
                <div className='mt-5'>
                    <p className='font-bold my-2'>Description</p>
                    <p>{description}</p>
                </div>
                <div hidden={booked}>
                    {
                        !isSeller && <>
                            <label htmlFor="my_modal_6" className='btn mt-20 btn-primary'>Book Now</label>
                            <button onClick={() => handleAddToWishlist(_id)} className='btn mt-20 mx-10'><GiSelfLove></GiSelfLove>Add to Wishlist</button>
                        </>
                    }
                </div>
            </div>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <button className='btn btn-accent' onClick={() => handleBookMobile(_id)} >Yes</button>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">No!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryProductDetails;