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
      <Card className="w-56" imgSrc={serviceProviderImage}>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {serviceProviderName}
        </h5>
        <p className="font-medium text-sm  text-gray-700 dark:text-gray-400">
          {/* Here are you will find the best car washer in you Area. Who are the
          very much professiolas. And Authorized by our field mambers. */}
          <div
            className="flex gap-2 ml-4 justify-between
          "
          >
            <div className="-mt-1">price: $ {populer.price}</div>
          </div>
        </p>
      </Card>
    </div>
  );
};

export default PopulerServiceCard;
