import React from "react";

const OtherService = ({ otherServiceOfProvider }) => {
  const {
    _id,
    serviceType,
    name,
    price,
    photoURL,
    description,

    serviceImageURL,
    serviceArea,
    email,
  } = otherServiceOfProvider;
  console.log(otherServiceOfProvider);
  return <div></div>;
};

export default OtherService;
