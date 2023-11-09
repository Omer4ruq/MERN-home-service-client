import React, { useEffect, useState } from "react";

import PopulerServiceCard from "./PopulerServiceCard";

const PopulerServices = () => {
  const [populers, setPopulers] = useState([]);
  const url = `http://localhost:5000/booked`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPopulers(data));
  }, []);
  return (
    <div>
      <h1 className="text-start font-bold text-2xl m-6 -ml-1">
        Popular service providers in your area
      </h1>
      <div className="grid grid-cols-4">
        {populers.map((populer) => (
          <PopulerServiceCard
            key={populer._Id}
            populer={populer}
          ></PopulerServiceCard>
        ))}
      </div>
    </div>
  );
};

export default PopulerServices;
