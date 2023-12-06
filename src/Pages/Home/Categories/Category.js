import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const {image,category_name} = category;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/allProducts/${category_name}`}><button className="btn btn-primary">GO</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;