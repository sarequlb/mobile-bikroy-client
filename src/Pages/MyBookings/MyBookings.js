import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../contexts/AuthProvider';
import MyBooking from './MyBooking';

const MyBookings = () => {
    const { user } = useContext(AuthContext)

    const { data: bookings = [] } = useQuery({
        queryKey: 'booking',
        queryFn: async () => {
            const res = await fetch(`https://mobile-bikroy-server.vercel.app/booking?email=${user?.email}`)
            const data = res.json()
            return data
        }
    })

    console.log(bookings)
    return (
        <div>
            <h1 className='text-2xl font-bold text-center py-20'>My Booking Details</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    bookings.map(booking => <MyBooking booking={booking} key={booking._id}></MyBooking>)
                }
            </div>
        </div>
    );
};

export default MyBookings;