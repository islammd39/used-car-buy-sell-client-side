import React, { useEffect, useState } from 'react';
import CategoriesSection from './CategoriesSection';

const Product = () => {
    const [productCategories,setProductCategories]=useState([])
    useEffect(()=>{
        fetch('carCategories.json')
        .then(res=>res.json())
        .then(data =>setProductCategories(data))
    },[])
    return (
        <div className='my-10'>
            <h2 className="text-center text-2xl my-5">Our Products Category</h2>
          <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto'>
            {
                productCategories.map(pCategory => <CategoriesSection key={pCategory.id} pCategory={pCategory}></CategoriesSection>)
            }
          </div>
        </div>
    );
};

export default Product;