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
    userEmail,
    date,
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
      <Card className="max-w-sm" imgSrc={serviceImage}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {serviceName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{date}</p>
        <p>{serviceProviderEmail}</p>
        <FaTrash></FaTrash>
      </Card>
    </div>
  );
};

export default BookedServices;
