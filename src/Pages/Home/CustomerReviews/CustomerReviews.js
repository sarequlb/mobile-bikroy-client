import React from 'react';
import { useQuery } from 'react-query';
import CustomerReview from './CustomerReview';

const CustomerReviews = () => {
    const { data: someCustomerReviews = [], refetch, isLoading } = useQuery({
        queryKey: 'reviews',
        queryFn: async () => {
            const res = await fetch('https://mobile-bikroy-server.vercel.app/reviews')
            const data = res.json()
            return data
        }
    })

    const someReviews = someCustomerReviews.slice(0,3)

    if (isLoading) {
        return <>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </>
    }
    return (
        <div className='my-32'>
            <h1 className='text-2xl mb-10 font-bold text-center'>What customer say about us</h1>
            <div className='grid lg:grid-cols-3 justify-center gap-5 lg:mx-20 md:grid-cols-2'>

                {
                    someReviews.map(someReview =><CustomerReview key={someReview._id} reviews={someReview}></CustomerReview> )
                }
            </div>
        </div>
    );
};

export default CustomerReviews;