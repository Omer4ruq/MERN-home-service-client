import React from "react";

const Banner = () => {
  return (
    <div>
      {/* <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">
              Get the right
              <span className="text-violet-400"> local pro </span>for any home
              project.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <h className="hidden md:inline lg:hidden">
                turpis pulvinar, est scelerisque ligula sem
              </h>
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-100"
              >
                Malesuada
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.ibb.co/vBKtQC4/Depositphotos-217084796-xl-2015-cropped.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section> */}

      <div className="relative flex items-center justify-center w-full dark:text-gray-50">
        <button
          aria-label="Slide back"
          type="button"
          className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ri focus:ri focus:ri"
        >
          <svg
            width="8"
            height="14"
            fill="none"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
              src="https://source.unsplash.com/random/240x360/?1"
              alt="Image 1"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
              src="https://source.unsplash.com/random/240x360/?2"
              alt="Image 2"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
              src="https://source.unsplash.com/random/240x360/?3"
              alt="Image 3"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
              src="https://source.unsplash.com/random/240x360/?4"
              alt="Image 4"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
              src="https://source.unsplash.com/random/240x360/?5"
              alt="Image 5"
            />
          </div>
        </div>
        <button
          aria-label="Slide forward"
          id="next"
          className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ri focus:ri focus:ri"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
