import React from "react";

const ManageServiceCard = ({ addedService }) => {
  const {
    serviceType,
    name,
    price,
    photoURL,
    description,

    serviceImageURL,
    serviceArea,
    email,
    serviceProviderAbout,
  } = addedService;
  return (
    <div>
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100">
        <h2 className="text-xl font-semibold">My Pending works</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                src={serviceImageURL}
                alt="Polaroid camera"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leadi sm:pr-8">
                      {serviceType}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{price}</p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
                  >
                    Delete
                  </button>

                  <div className="relative ml-2">
                    <button
                      type="button"
                      className="px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ManageServiceCard;
