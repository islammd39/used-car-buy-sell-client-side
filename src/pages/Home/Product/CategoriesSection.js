import React from "react";
import { Link } from "react-router-dom";

const CategoriesSection = ({ pCategory }) => {
    const {name, _id} = pCategory;
//   console.log(pCategory);
  return (
    <div className="mx-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p><Link to={`pCategory/${_id}`}>{name}</Link></p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
