import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateService = () => {
  const service = useLoaderData();
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
    serviceProviderAbout,
  } = service;
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceType = form.serviceType.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;

    const description = form.description.value;
    const serviceProviderAbout = form.serviceProviderAbout.value;

    const serviceImageURL = form.serviceImageURL.value;
    const serviceArea = form.serviceArea.value;
    const photoURL = form.photoURL.value;

    const newProducts = {
      serviceType,
      name,
      price,
      photoURL,
      description,

      serviceImageURL,
      serviceArea,
      email,
      serviceProviderAbout,
    };
    console.log(newProducts);

    fetch(`http://localhost:5000/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Update Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto mt-10">
        <form onSubmit={handleUpdate}>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-semibold mb-6">Add a Service</h2>

            <div className="mb-6">
              <label className="block text-gray-600">Service Type:</label>
              <select
                name="serviceType"
                defaultValue={serviceType}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option value="">Select Service Type</option>
                <option value="Furniture Assembly">Furniture Assembly</option>
                <option value="Home Repairs">Home Repairs</option>
                <option value="Home Cleaning">Home Cleaning</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical Help">Electrical Help</option>
                <option value="Heavy Furniture Moving">
                  Heavy Furniture Moving
                </option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-600">Price:</label>
              <input
                type="number"
                defaultValue={price}
                className="w-full px-4 py-3 border rounded-lg"
                name="price"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600">Profile Photo:</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg"
                name="photoURL"
                defaultValue={photoURL}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600">Service Image URL:</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg"
                name="serviceImageURL"
                defaultValue={serviceImageURL}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600">Name:</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg"
                name="name"
                defaultValue={name}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600">Email:</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg"
                name="email"
                defaultValue={email}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600">Service Area:</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg"
                name="serviceArea"
                defaultValue={serviceArea}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600">Description:</label>
              <textarea
                className="w-full px-4 py-3 border rounded-lg"
                name="description"
                defaultValue={description}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600">
                About Service Provider:
              </label>
              <textarea
                className="w-full px-4 py-3 border rounded-lg"
                name="serviceProviderAbout"
                defaultValue={serviceProviderAbout}
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg w-full">
              Update Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
