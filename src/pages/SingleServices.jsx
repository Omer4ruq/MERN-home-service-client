"use client";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

import { AuthContext } from "../providers/AuthProvider";

const SingleServices = () => {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const [date, setDate] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [instruction, setInstruction] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const {
    serviceType,
    name,
    price,
    photoURL,
    description,

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
      user: user.email,
      date,
      instruction,
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
                <div className="flex flex-row items-center">
                  <button className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl">
                    -
                  </button>
                  <span className="py-4 px-6 rounded-lg">amount</span>
                  <button className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl">
                    +
                  </button>
                </div>
                <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
                  Add to Cart
                </button>
                <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
                <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                  <Modal.Header />
                  <Modal.Body>
                    <div className="space-y-6">
                      <h3 className="text-xl font-medium text-gray-900 text-white">
                        Sign in to our platform
                      </h3>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput
                          id="email"
                          placeholder="name@company.com"
                          value={email}
                          required
                        />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput id="password" type="password" required />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox id="remember" />
                          <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <a
                          href="#"
                          className="text-sm text-cyan-700 hover:underline text-cyan-500"
                        >
                          Lost Password?
                        </a>
                      </div>
                      <div className="w-full">
                        <Button>Log in to your account</Button>
                      </div>
                      <div className="flex justify-between text-sm font-medium text-gray-500 text-gray-300">
                        Not registered?&nbsp;
                        <a
                          href="#"
                          className="text-cyan-700 hover:underline text-cyan-500"
                        >
                          Create account
                        </a>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-violet-400 text-gray-900">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Pro</h4>
                <span className="text-6xl font-bold">
                  $24
                  <span className="text-sm tracki">/month</span>
                </span>
              </div>
              <p className="leadi">
                Morbi cursus ut sapien sit amet consectetur.
              </p>
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
                  <span>Everything in Free</span>
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
                </li>
              </ul>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded bg-gray-800 text-violet-400"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServices;
