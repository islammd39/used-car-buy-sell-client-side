import React, { useEffect, useState } from 'react';
import CategoriesSection from './CategoriesSection';

const Product = () => {
    const [productCategories,setProductCategories]=useState([])
    useEffect(()=>{
        fetch('https://b612-used-products-resale-server-side-islammd39.vercel.app/categories')
        .then(res=>res.json())
        .then(data =>setProductCategories(data))
    },[])
    return (
        <div className='my-10'>
            <h2 className="text-center text-2xl my-5">Our Products Category</h2>
          <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-5'>
            {
                productCategories.map(pCategory => <CategoriesSection key={pCategory._id} pCategory={pCategory}></CategoriesSection>)
            }
          </div>
        </div>
    );
};

export default Product;