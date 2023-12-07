import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';

const CategoryProducts = () => {
    const productsData = useLoaderData()
    return (
        <div className='mb-96 mt-20'>
            <h1 className='text-2xl font-bold text-center border-b-2 p-10'>Available Post</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20'>
                {
                    productsData.map(productData => <CategoryProduct productData={productData} key={productData._id}></CategoryProduct>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;