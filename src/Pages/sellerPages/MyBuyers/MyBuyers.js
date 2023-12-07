import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyBuyer from './MyBuyer';

const MyBuyers = () => {
    const {user} = useContext(AuthContext)
    const {data:myBuyers =[]} = useQuery({
        queryKey:'myBuyers',
        queryFn: async () =>{
            const res = await fetch(`https://mobile-bikroy-server.vercel.app/booking/seller?email=${user?.email}`)
            const data = res.json()
            return data
        }
    })

    console.log(myBuyers)
    return (
        <div>
            <h1 className='text-2xl font-bold text-center py-20'>My Buyers</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    myBuyers.map(myBuyer => <MyBuyer key={myBuyer._id} myBuyer={myBuyer}></MyBuyer>)
                }
            </div>
        </div>
    );
};

export default MyBuyers;