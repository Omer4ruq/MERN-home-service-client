import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ServicesByCatagory = () => {
  const service = useLoaderData();
  console.log(service);
  return <div></div>;
};

export default ServicesByCatagory;
