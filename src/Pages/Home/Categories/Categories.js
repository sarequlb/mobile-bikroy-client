import React from 'react';
import { useQuery } from 'react-query';
import Category from './Category';

const Categories = () => {
    const { data: categories=[],isLoading} = useQuery({
        queryKey: 'categories',
        queryFn: async () => {
            const res = fetch('http://localhost:5000/categories')
            const data = (await res).json()
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
    console.log(categories)
    return (
        <div className='my-32'>
            <h1 className='text-2xl font-bold text-center mb-10'>Browse Item by Category</h1>

            <div className='grid lg:grid-cols-3 justify-center gap-5 lg:mx-20 md:grid-cols-2 '>
                {
                    categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;