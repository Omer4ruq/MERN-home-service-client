import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
("use client");

import { Card } from "flowbite-react";
import { FaTrash } from "react-icons/fa";

const BookedServices = ({ booking }) => {
  const {
    _id,
    serviceName,
    serviceImage,
    serviceProviderEmail,
    email,
    date,
    price,
  } = booking;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booked/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-3">
        {/* <Card className="max-w-sm" imgSrc={serviceImage}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {serviceName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{date}</p>
        <p>{serviceProviderEmail}</p>
        <FaTrash onClick={() => handleDelete(_id)}></FaTrash>
      </Card> */}
        <Card className="w-56" imgSrc={serviceImage}>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {serviceName}
          </h5>
          <p className="font-medium text-sm  text-gray-700 dark:text-gray-400">
            {/* Here are you will find the best car washer in you Area. Who are the
          very much professiolas. And Authorized by our field mambers. */}
            <div
              className="flex gap-2 ml-4 justify-between
          "
            >
              <div className="-mt-1">price: $ {price}</div>
              <FaTrash
                onClick={() => handleDelete(_id)}
                className="text-2xl"
              ></FaTrash>
            </div>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default BookedServices;
