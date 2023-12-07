import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../contexts/AuthProvider';
import WishlistItem from './WishlistItem';

const WishlistItems = () => {
    const { user } = useContext(AuthContext)
    const { data: wishlistData = [], refetch, isLoading } = useQuery({
        queryKey: 'wishlistData',
        queryFn: async () => {
            const res = await fetch(`https://mobile-bikroy-server.vercel.app/wishlist?email=${user?.email}`)
            const data = res.json()
            return data;
        }
    })
    if (isLoading) {
        return <div className='flex justify-center items-center my-40'>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
    </div>
    }
    return (
        <div className='mt-10'>
            <h1 className='text-2xl font-bold text-center border-b-2 p-10'>Your Wishlist items</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20'>
                {
                    wishlistData.map(wishlistData => <WishlistItem refetch={refetch} wishlistData={wishlistData} ></WishlistItem>)
                }
            </div>
        </div>
    );
};

export default WishlistItems;