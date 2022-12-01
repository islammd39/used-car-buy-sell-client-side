import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCategoryCard from './ProductCategoryCard';
import ProductModal from './ProductModal';

const CategoriesCard = () => {
    const {name, product}= useLoaderData()
    const [pCategory, setPCategory] = useState(null)
    // console.log(product);

    return (
        <div className='my-10'>
            <div className='text-center my-5'>
            <h2 className='text-xl font-semibold text-primary'>{name}</h2>
            </div>
           <div className='grid grid-cols-1 gap-10'>
            {
                product.map(p=> <ProductCategoryCard setPCategory={setPCategory} key={p.carId} p={p}></ProductCategoryCard>)
            }
           </div>
           {
            pCategory &&
            <ProductModal setPCategory={setPCategory} pCategory={pCategory}></ProductModal>
            }
        </div>
    );
};

export default CategoriesCard;