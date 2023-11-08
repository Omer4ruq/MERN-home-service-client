import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet";

const Services = () => {
  const services = useLoaderData();
  const [dataLength, setDataLength] = useState(2);
  return (
    <div>
      <Helmet>
        <title>Service Page</title>
      </Helmet>

      <div className="grid grid-cols-1 p-3 max-w-lg mx-auto gap-4">
        {services.slice(0, dataLength).map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <button
        onClick={() => setDataLength(services.length)}
        className="px-4 py-2 font-semibold rounded bg-cyan-950 text-white"
      >
        Show All
      </button>
    </div>
  );
};

export default Services;
