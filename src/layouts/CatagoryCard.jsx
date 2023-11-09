import React from "react";
("use client");

import { Card } from "flowbite-react";
import { FaTag } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CatagoryCard = ({ catagory }) => {
  const { serviceType, brandImage } = catagory;
  return (
    <div>
      <NavLink to={`/services`}>
        <Card className="w-72" imgSrc={brandImage}>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {serviceType}
          </h5>
          <p className="font-medium text-sm  text-gray-700 dark:text-gray-400">
            {/* Here are you will find the best car washer in you Area. Who are the
          very much professiolas. And Authorized by our field mambers. */}
            <div
              className="flex gap-2 ml-4
          "
            >
              <FaTag className="w-8"></FaTag>
              <div className="-mt-1"> Avg. Project: $10-$30</div>
            </div>
          </p>
        </Card>
      </NavLink>
    </div>
  );
};

export default CatagoryCard;
