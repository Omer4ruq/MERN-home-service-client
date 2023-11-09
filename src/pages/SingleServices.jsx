"use client";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

import { AuthContext } from "../providers/AuthProvider";
import OtherService from "../layouts/otherService";

const SingleServices = () => {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const [date, setDate] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [instruction, setInstruction] = useState("");
  const [status, setStatus] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const {
    serviceType,
    name,
    price,
    photoURL,
    description,
    serviceProviderAbout,
    serviceImageURL,
    serviceArea,
    email,
  } = service;
  const handleBookedProduct = (event) => {
    event.preventDefault();
    // const form = event.target;

    // const type = serviceType;
    // const user = user.email;
    // const serviceProviderEmail = email;
    // const price = price;
    // const city = form.city.value;
    // const adress = form.adress.value;
    // const zip = form.zip.value;
    // const instruction = form.instruction.value;

    // const serviceImageURL = serviceImageURL;

    // console.log(type);
    // const newProducts = {
    //   serviceType,
    //   name,
    //   price,
    //   photoURL,
    //   description,

    //   serviceImageURL,
    //   serviceArea,
    //   serviceProviderEmail,
    //   city,
    //   adress,
    //   zip,
    //   instruction,
    // };
    const data = {
      serviceName: service.serviceType,
      serviceImage: service.serviceImageURL,
      serviceProviderEmail: service.email,
      serviceProviderName: service.name,
      serviceProviderImage: service.photoURL,
      email: user.email,
      price: service.price,
      date,
      instruction,
      status,
    };
    console.log(data);

    fetch("http://localhost:5000/booked", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("br " + data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Service Booked Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });

    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <Helmet>
        <title>Signup Page</title>
      </Helmet>
      <div>
        {/* <div className="hero min-h-screen bg-yellow-300">
          <div className="hero-content flex-col lg:flex-row">
            <img
              className=" w-xl md:max-w-2xl rounded-lg shadow-2xl"
              src={photoURL}
            />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">{description}</p>
              <h2 className="text-3xl">price: ${price}</h2>
              <div className=" flex gap-12 mt-8">
                <button
                  onClick={toggleDropdown}
                  className="btn btn-neutral rounded-none"
                >
                  Add Cart
                </button>
                {isDropdownOpen && (
                  
                  <section>
                    <form onSubmit={handleBookedProduct}>
                      <div>
                        <input
                          type="text"
                          value={service.serviceType}
                          readOnly
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          value={service.serviceImageURL}
                          readOnly
                          className="text-black"
                        />
                      </div>
                      <div>
                        <input type="text" value={service.email} readOnly />
                      </div>
                      <div>
                        <input type="text" value={user.email} readOnly />
                      </div>
                      <div>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                      <div>
                        <textarea
                          value={instruction}
                          onChange={(e) => setInstruction(e.target.value)}
                        />
                      </div>
                      <button type="submit">Submit</button>
                    </form>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="flex">
        <div>
          <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
            <div className="flex flex-col gap-6 lg:w-2/4">
              <img
                src={serviceImageURL}
                alt=""
                className="w-full h-full aspect-square object-cover rounded-xl"
              />
              {/* <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div> */}
            </div>
            {/* ABOUT */}
            <div className="flex flex-col gap-4 lg:w-2/4">
              <div>
                <h1 className="text-3xl font-bold">{serviceType}</h1>
                <span className=" text-violet-600 font-semibold">
                  {serviceArea}
                </span>
              </div>
              <p className="text-gray-700">{description}</p>
              <h6 className="text-2xl font-semibold">$ {price}</h6>
              <div className="flex flex-row items-center gap-12">
                {/* <div className="flex flex-row items-center">
                  <button className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl">
                    -
                  </button>
                  <span className="py-4 px-6 rounded-lg">amount</span>
                  <button className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl">
                    +
                  </button>
                </div> */}
                <a
                  rel="noopener noreferrer"
                  href="#"
                  onClick={() => setOpenModal(true)}
                  className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded bg-gray-800 text-violet-400"
                >
                  Get Started
                </a>

                <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                  <Modal.Header />
                  <Modal.Body>
                    <div className="">
                      <form onSubmit={handleBookedProduct}>
                        <div>
                          <div className=" block">
                            <Label value="Service Type" />
                          </div>
                          <TextInput
                            type="text"
                            value={service.serviceType}
                            readOnly
                          />
                        </div>
                        <div>
                          <div className=" block">
                            <Label htmlFor="password" value="Service Image" />
                          </div>
                          <TextInput
                            type="text"
                            value={service.serviceImageURL}
                            readOnly
                            className="text-black"
                          />
                        </div>
                        <div>
                          <div className=" block">
                            <Label htmlFor="password" value="Price" />
                          </div>
                          <TextInput
                            type="text"
                            value={"$" + service.price}
                            readOnly
                            className="text-black"
                          />
                        </div>
                        <div>
                          <div className=" block">
                            <Label
                              htmlFor="password"
                              value="Service Provider Email"
                            />
                          </div>
                          <TextInput
                            type="text"
                            value={service.email}
                            readOnly
                            className="text-black"
                          />
                        </div>
                        <div>
                          <div className=" block">
                            <Label
                              htmlFor="password"
                              value="Service Provider Photo"
                            />
                          </div>
                          <TextInput
                            type="text"
                            value={photoURL}
                            readOnly
                            className="text-black"
                          />
                        </div>
                        <div>
                          <div className=" block">
                            <Label
                              htmlFor="password"
                              value="Service Provider Name"
                            />
                          </div>
                          <TextInput
                            type="text"
                            value={service.name}
                            readOnly
                            className="text-black"
                          />
                        </div>
                        <div>
                          <div className=" block">
                            <Label htmlFor="password" value="Your Email" />
                          </div>
                          <TextInput
                            type="text"
                            value={user.email}
                            readOnly
                            className="text-black"
                          />
                        </div>
                        <div>
                          <div className=" block">
                            <Label htmlFor="password" value="Set Date" />
                          </div>
                          <TextInput
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </div>
                        <div>
                          <div className=" block">
                            <Label htmlFor="password" value="Instruction" />
                          </div>
                          <TextInput
                            value={instruction}
                            onChange={(e) => setInstruction(e.target.value)}
                            className="text-black"
                          />
                        </div>
                        <div className="hidden">
                          <div className=" block">
                            <Label htmlFor="password" value="Service Status" />
                          </div>
                          <TextInput
                            value="Painding"
                            onChange={(e) => setStatus(e.target.value)}
                            className="text-black"
                            readOnly
                          />
                        </div>

                        <button
                          className="px-8 py-3 font-semibold border rounded bg-cyan-900 border-gray-100 text-gray-300"
                          type="submit"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex w-72 h-96 mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-violet-400 text-gray-900">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">{name}</h4>
                {/* <span className="text-6xl font-bold">
                  {serviceArea}
                  <span className="text-sm tracki">/month</span>
                </span> */}
              </div>
              {/* <p className="leadi">{serviceProviderAbout}</p> */}
              <img src={photoURL} alt="" />
              <ul className="flex-1 space-y-2">
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>{serviceArea}</span>
                </li>
                {/* <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Phasellus tellus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Praesent faucibus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Aenean et lectus blandit</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl">Other services from this service provider</h1>
      </div>
    </div>
  );
};

export default SingleServices;
