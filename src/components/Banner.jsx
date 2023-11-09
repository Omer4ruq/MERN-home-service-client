import React from "react";
("use client");

import { Carousel } from "flowbite-react";

const Banner = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          src="https://imageupload.io/ib/uLe9LmIEyMoPh8b_1699535298.jpg"
          alt="..."
        />
        <img
          src="https://imageupload.io/ib/0WRCoVjxx1zKgmt_1699535367.jpeg"
          alt="..."
        />
        <img
          src="https://imageupload.io/ib/3qKZ3x2jNpzpR8e_1699535425.jpg"
          alt="..."
        />
        <img
          src="https://imageupload.io/ib/7nRsPLbaRtU3zq9_1699535472.jpg"
          alt="..."
        />
        <img
          src="https://imageupload.io/ib/eUaewHrXX6c1HxD_1699535524.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Banner;
