import React from "react";

const ProductCategoryCard = ({ p , setPCategory }) => {
    const {image, companyName, original, resellPrice, since, location, postTime, sellerName}= p
  // console.log(p);
  return (
    <div>
      <div className="card w-5/6 lg:card-side bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={image} className="lg:h-96 lg:w-96" alt="car" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Company Name : {companyName}</h2>
          <p>Original Price : {original}</p>
          <p>Resell Price : {resellPrice}</p>
          <p>Register Year : {since}</p>
          <p>Location : {location}</p>
          <p>Date of Post : {postTime}</p>
          <p>Owner : {sellerName}</p>
          <div className="card-actions justify-start">
          <label onClick={()=>setPCategory(p)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
