import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCategoryCard from './ProductCategoryCard';

const CategoriesCard = () => {
    const {name, product}= useLoaderData()
    // console.log(product);

    return (
        <div>
            <div className='text-center'>
            <h2>{product.length}</h2>
            <h2>{name}</h2>
            </div>
            {
                product.map(p=> <ProductCategoryCard key={p.carId} p={p}></ProductCategoryCard>)
            }
        </div>
    );
};

export default CategoriesCard;