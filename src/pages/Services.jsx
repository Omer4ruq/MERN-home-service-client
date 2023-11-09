import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet";
import { FaSearch } from "react-icons/fa";

const Services = () => {
  const services = useLoaderData();
  const [dataLength, setDataLength] = useState(2);
  const [search, setSearch] = useState("");
  return (
    <div>
      <Helmet>
        <title>Service Page</title>
      </Helmet>
      <div className="bg-white">
        <div>
          <form className="bg-slate-100 p-2 ml-96 mt-8 rounded-lg flex items-center w-64">
            <input
              type="text"
              placeholder="Search Services"
              className="bg-transparent border-none w-4 sm:w-64"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="text-slate-600"></FaSearch>
          </form>
        </div>

        <div className="grid grid-cols-1 p-3 max-w-lg mx-auto gap-4 ml-48">
          {services
            .filter((service) => {
              return search.toLowerCase() === ""
                ? service
                : service.serviceType.toLowerCase().includes(search);
            })
            .slice(0, dataLength)
            .map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
        </div>
        <button
          onClick={() => setDataLength(services.length)}
          className="px-4 py-2 font-semibold rounded bg-cyan-950 text-white hover:scale-90"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Services;
