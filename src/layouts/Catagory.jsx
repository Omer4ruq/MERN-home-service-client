import React from "react";
("use client");

import { Card } from "flowbite-react";
import { FaTag } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CatagoryCard from "./CatagoryCard";

const Catagory = ({ catagories }) => {
  return (
    <div>
      <div>
        <h1 className="text-start font-bold text-2xl m-6 -ml-1">
          Popular services in your area
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {catagories.map((catagory) => (
          <CatagoryCard key={catagory.id} catagory={catagory}></CatagoryCard>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
