import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCategoryCard from './ProductCategoryCard';

const CategoriesCard = () => {
    const {name, product}= useLoaderData()
    // console.log(product);

    return (
        <div className='my-10'>
            <div className='text-center'>
            <h2>{product.length}</h2>
            <h2>{name}</h2>
            </div>
           <div className='grid grid-cols-1 gap-10'>
            {
                product.map(p=> <ProductCategoryCard key={p.carId} p={p}></ProductCategoryCard>)
            }
           </div>
        </div>
    );
};

export default CategoriesCard;