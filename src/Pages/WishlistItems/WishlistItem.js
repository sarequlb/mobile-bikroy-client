import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ConfirmationModal from '../../SharedPage/ConfirmationModal/ConfirmationModal';

const WishlistItem = ({ wishlistData }) => {
    const { location, price, image, date, model, mobileId, booked, _id } = wishlistData
    console.log(wishlistData)

    const [deletingWishlist, setDeletingWishlist] = useState(null)

    const closeModal = () => {
        setDeletingWishlist(null)
    }

    const handleDelete = (id) => {
        fetch(`https://mobile-bikroy-server.vercel.app/wishlist/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Deleted Successfully')
                    window.location.reload(true)
                }
            })
    }
    return (
        <div>
            {
                !booked &&
                <div className="card card-side bg-base-100 shadow-xl hover:border-4 h-full">
                    <figure><img className='w-40 p-2' src={image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{model}</h2>
                        <p>{location},Mobile Phones</p>
                        <p>Tk {price}</p>
                        <div className="card-actions justify-end">
                            <p>Post Date: {date?.slice(0, 10)}</p>
                        </div>
                        <Link className='btn btn-primary btn-sm' to={`/allProducts/product/${mobileId}`}>Details </Link>
                        <label onClick={() => setDeletingWishlist(_id)} className='btn btn-error btn-sm' htmlFor="confirmation-modal" >Delete</label>
                    </div>
                </div>
            }


            {
                deletingWishlist && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    closeModal={closeModal}
                    successAction={handleDelete}
                    modalData={deletingWishlist}
                    buttonName='Delete'
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default WishlistItem;