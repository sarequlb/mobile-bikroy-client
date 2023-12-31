import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyProduct from './MyProduct';

const MyProducts = () => {

    const { user } = useContext(AuthContext)
    console.log(user?.email)

    const { data: myProducts, isLoading } = useQuery({

        queryKey: 'myProducts',
        queryFn: async () => {
            const res = await fetch(`https://mobile-bikroy-server.vercel.app/allProducts?email=${user?.email}`, {

            })
            const data = await res.json()
            return data;
        }
    })

    if(isLoading){
        return <div className='flex justify-center items-center my-40'>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
    </div>
    }

    console.log(myProducts)
    return (
        <div>
            <h1 className='text-2xl font-bold text-center my-20 border-b-2 pb-5'>My <span className='text-red-700'>Products</span></h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    myProducts.map(myProduct => <MyProduct key={myProduct._id} myProduct={myProduct}></MyProduct>)
                }
            </div>
        </div>
    );
};

export default MyProducts;