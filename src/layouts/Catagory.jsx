import React from "react";
("use client");

import { Card } from "flowbite-react";
import { FaTag } from "react-icons/fa";

const Catagory = () => {
  return (
    <div>
      <h1 className="text-start font-bold text-2xl m-6 -ml-1">
        Popular services in your area
      </h1>
      <div className="grid grid-cols-4 gap-3">
        <Card
          className="w-72"
          imgSrc="https://i.ibb.co/THJ89v6/Steam-Car-Washing-300x200.jpg"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Car Wash Service
          </h5>
          <p className="font-medium text-sm  text-gray-700 dark:text-gray-400">
            {/* Here are you will find the best car washer in you Area. Who are the
          very much professiolas. And Authorized by our field mambers. */}
            <div
              className="flex gap-2 ml-4
          "
            >
              <FaTag className="w-8"></FaTag>
              <div className="-mt-1"> Avg. Project: $10-$30</div>
            </div>
          </p>
        </Card>
        <Card
          className="w-72"
          imgSrc="https://i.ibb.co/WgMfk4d/plumber-fixing-white-sink-pipe-with-adjustable-wrench-picture-id1150199946-768x512.jpg"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Plumbing Service
          </h5>
          <p className="font-medium text-sm  text-gray-700 dark:text-gray-400">
            {/* Here are you will find the best car washer in you Area. Who are the
          very much professiolas. And Authorized by our field mambers. */}
            <div
              className="flex gap-2 ml-4
          "
            >
              <FaTag className="w-8"></FaTag>
              <div className="-mt-1"> Avg. Project: $10-$30</div>
            </div>
          </p>
        </Card>
        <Card
          className="w-72"
          imgSrc="https://i.ibb.co/zVYfk3h/commercial-electrician-1.jpg"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Electrical Service
          </h5>
          <p className="font-medium text-sm  text-gray-700 dark:text-gray-400">
            {/* Here are you will find the best car washer in you Area. Who are the
          very much professiolas. And Authorized by our field mambers. */}
            <div
              className="flex gap-2 ml-4
          "
            >
              <FaTag className="w-8"></FaTag>
              <div className="-mt-1"> Avg. Project: $10-$30</div>
            </div>
          </p>
        </Card>
        <Card
          className="w-72"
          imgSrc="https://imageupload.io/ib/uOKSWrsFgLO1knK_1699522969.jpg"
          alt="download (1).jpg"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Painting Service
          </h5>
          <p className="font-medium text-sm  text-gray-700 dark:text-gray-400">
            {/* Here are you will find the best car washer in you Area. Who are the
          very much professiolas. And Authorized by our field mambers. */}
            <div
              className="flex gap-2 ml-4
          "
            >
              <FaTag className="w-8"></FaTag>
              <div className="-mt-1"> Avg. Project: $10-$30</div>
            </div>
          </p>
        </Card>
        <Card
          className="w-72"
          imgSrc="https://i.ibb.co/b7dtSn7/durham-moving-companyasas.jpg"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Moving And Packaging Service
          </h5>
          <p className="font-medium text-sm  text-gray-700 dark:text-gray-400">
            {/* Here are you will find the best car washer in you Area. Who are the
          very much professiolas. And Authorized by our field mambers. */}
            <div
              className="flex gap-2 ml-4
          "
            >
              <FaTag className="w-8"></FaTag>
              <div className="-mt-1"> Avg. Project: $10-$30</div>
            </div>
          </p>
        </Card>
        <Card
          className="w-72"
          imgSrc="https://i.ibb.co/x17zD6z/Adobe-Stock-182833843-1-1.jpg"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Furniture Assmble Service
          </h5>
          <p className="font-medium text-sm  text-gray-700 dark:text-gray-400">
            {/* Here are you will find the best car washer in you Area. Who are the
          very much professiolas. And Authorized by our field mambers. */}
            <div
              className="flex gap-2 ml-4
          "
            >
              <FaTag className="w-8"></FaTag>
              <div className="-mt-1"> Avg. Project: $10-$30</div>
            </div>
          </p>
        </Card>
        <Card
          className="w-72"
          imgSrc="https://i.ibb.co/BGMCYDy/Cleaning-supplies.jpg"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cleaning Service
          </h5>
          <p className="font-medium text-sm  text-gray-700 dark:text-gray-400">
            {/* Here are you will find the best car washer in you Area. Who are the
          very much professiolas. And Authorized by our field mambers. */}
            <div
              className="flex gap-2 ml-4
          "
            >
              <FaTag className="w-8"></FaTag>
              <div className="-mt-1"> Avg. Project: $10-$30</div>
            </div>
          </p>
        </Card>
        <Card
          className="w-72"
          imgSrc="https://imageupload.io/ib/s0A5tgodTHVxCFO_1699523184.jpg"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Gardening
          </h5>
          <p className="font-medium text-sm  text-gray-700 dark:text-gray-400">
            {/* Here are you will find the best car washer in you Area. Who are the
          very much professiolas. And Authorized by our field mambers. */}
            <div
              className="flex gap-2 ml-4
          "
            >
              <FaTag className="w-8"></FaTag>
              <div className="-mt-1"> Avg. Project: $10-$30</div>
            </div>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Catagory;
