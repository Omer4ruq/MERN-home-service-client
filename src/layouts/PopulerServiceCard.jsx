import React from "react";
import { Card } from "flowbite-react";
import { FaTag } from "react-icons/fa";

const PopulerServiceCard = ({ populer }) => {
  const {
    _id,
    serviceName,
    serviceImage,
    serviceProviderEmail,
    serviceProviderName,

    serviceProviderImage,
    email,
    date,
    price,
  } = populer;
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <img
          src={serviceProviderImage}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
            {serviceProviderName}
          </span>
          <h2 className="text-xl font-semibold tracki">{serviceName}</h2>
        </div>
        {/* <p className="dark:text-gray-100">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p> */}
      </div>
    </div>
  );
};

export default PopulerServiceCard;
