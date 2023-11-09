import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { FaTag } from "react-icons/fa";
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
      {populers.map((populer) => (
        <PopulerServiceCard
          key={populer._Id}
          populer={populer}
        ></PopulerServiceCard>
      ))}
    </div>
  );
};

export default PopulerServices;
