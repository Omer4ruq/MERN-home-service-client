import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
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
  } = service;
  const characterLimit = 60;
  const truncatedDescription =
    description.length > characterLimit
      ? `${description.substring(0, characterLimit)}...`
      : description;
  return (
    <div>
      {/* <div className="max-w- p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100 ">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={serviceImageURL}
            alt=""
            className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{serviceType}</h2>
            <span className="text-sm dark:text-gray-400">
              <p>{truncatedDescription}</p>
              {description.length > characterLimit && (
                <NavLink to="/single-service">Read more</NavLink>
              )}
            </span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Email address"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                ></path>
              </svg>
              <span className="dark:text-gray-400">
                leroy.jenkins@company.com
              </span>
            </span>
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Phonenumber"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                ></path>
              </svg>
              <span className="dark:text-gray-400">+25 381 77 983</span>
            </span>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div>
          <div>
            <img
              src={serviceImageURL}
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              alt=""
            />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <img
                src={photoURL}
                alt=""
                className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
              />
              <div className="-space-y-1">
                <h2 className="text-sm font-semibold leadi">{name}</h2>
                <span className="inline-block text-xs leadi dark:text-gray-400">
                  Service Area: {serviceArea}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {serviceType}
          </h5>
          <h1>Price: ${price}</h1>
          <div className="">
            <p className="mb-3 font-normal text-xs text-left text-gray-700 dark:text-gray-400">
              {" "}
              <div>
                <p>
                  {truncatedDescription}{" "}
                  {description.length > characterLimit && (
                    <NavLink to="/single-service">Read more</NavLink>
                  )}
                </p>
              </div>
              <div></div>
            </p>
          </div>
        </div>
        <NavLink to={`/single-service/${_id}`}>
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded bg-cyan-700 text-white"
          >
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceCard;
