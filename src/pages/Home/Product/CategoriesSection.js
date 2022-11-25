import React from "react";
import { Link } from "react-router-dom";

const CategoriesSection = ({ pCategory }) => {
    const {name, id} = pCategory;
  // console.log(pCategory);
  return (
    <div className="mx-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p><Link to={`pCategory/${id}`}>{name}</Link></p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
