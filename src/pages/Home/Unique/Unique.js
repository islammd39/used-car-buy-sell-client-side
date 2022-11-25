import React from "react";
import money from "../../../assets/images/money.png"
import service from "../../../assets/images/car-service.png"

const Unique = () => {
  return (
    <div>
      <h2 className="text-center text-2xl my-5">Our Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-48 lg:mb-10">
      <div className="mx-auto">
        <div className="bg-base-100 shadow-xl flex items-center lg:p-5">
        <figure><img src={money} alt="Money"/></figure>
          <div className="card-body">
            <h2 className="card-title">Money back guarantee</h2>
            <p>We believe that auto care should be a hassle-free experience.</p>
          </div>
        </div>
      </div>
      <div className=" mx-auto">
        <div className="bg-base-100 shadow-xl flex items-center lg:p-5">
        <figure><img src={service} alt="service"/></figure>
          <div className="card-body">
            <h2 className="card-title">Free service</h2>
            <p>good place to further implement service to aid our customers.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Unique;
