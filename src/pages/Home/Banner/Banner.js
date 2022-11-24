import React from "react";
import bannerImage from "../../../assets/images/banner-image-01.jpg"

const Banner = () => {
  return (
    <div className="lg:p-10">
      <div className="hero lg:py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImage}
            className="lg:w-1/2 rounded-lg shadow-2xl"
          alt="..."/>
          <div>
            <h1 className="text-5xl font-bold lg:mt-5">Cars at the Best Prices in Bangladesh</h1>
            <p className="py-6 mt-5">
            Avoid anything that appears too good to be true, such as unrealistically low prices and promises of quick money.
            </p>
            <button className="btn h-14 bg-gradient-to-r from-primary to-secondary text-white border-none lg:mt-5">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;