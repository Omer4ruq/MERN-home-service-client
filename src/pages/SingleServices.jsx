import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const SingleServices = () => {
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
      serviceImage: service.image,
      serviceProviderEmail: service.email,
      userEmail: user.email,
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
        <div className="hero min-h-screen bg-yellow-300">
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
                  // <section className="w-[700px] h-[500px] fixed inset-0 flex items-center justify-center z-50  bg-gray-800 text-gray-50 mt-8 ml-72">
                  //   <form
                  //     onSubmit={handleBookedProduct}
                  //     action=""
                  //     className=" flex flex-col mx-auto space-y-12 backdrop-blur-sm"
                  //   >
                  //     <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                  //       {/* <div className="space-y-2 col-span-full lg:col-span-1">
                  //         <p className="font-medium">Personal Inormation</p>
                  //         <p className="text-xs">
                  //           Lorem ipsum dolor sit, amet consectetur adipisicing
                  //           elit. Adipisci fuga autem eum!
                  //         </p>
                  //       </div> */}
                  //       <div className=" mt-2">
                  //         <div className="flex gap-3">
                  //           <div className="col-span-full sm:col-span-3">
                  //             <label className="text-sm">Service Name</label>
                  //             <input
                  //               type="text"
                  //               value={serviceType}
                  //               readOnly
                  //               className="w-28 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  //             />
                  //           </div>
                  //           <div className="col-span-full sm:col-span-3">
                  //             <label className="text-sm">Price</label>
                  //             <input
                  //               type="text"
                  //               value={price}
                  //               readOnly
                  //               className="w-28 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  //             />
                  //           </div>
                  //           <div className="col-span-full sm:col-span-3">
                  //             <label className="text-sm">Service Imagee</label>
                  //             <input
                  //               type="text"
                  //               value={photoURL}
                  //               className="w-40 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  //             />
                  //           </div>
                  //           <div className="col-span-full sm:col-span-3">
                  //             <label className="text-sm">
                  //               Service Provider email
                  //             </label>
                  //             <input
                  //               id="email"
                  //               type="email"
                  //               value={email}
                  //               className="w-40 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  //             />
                  //           </div>
                  //         </div>

                  //         <div className="col-span-full sm:col-span-3">
                  //           <label className="text-sm">User Email</label>
                  //           <input
                  //             id="username"
                  //             type="text"
                  //             value={user.email}
                  //             className="w-40 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  //           />
                  //         </div>
                  //         <div className="my-4">
                  //           <label htmlFor="date">Service Taking Date:</label>
                  //           <input
                  //             type="date"
                  //             id="date"
                  //             className="w-[500px] text-black bg-gray-100 border rounded-lg py-2 px-3"
                  //             value={date}
                  //             name="date"
                  //             onChange={(e) => setDate(e.target.value)}
                  //           />
                  //         </div>
                  //         <div className="flex">
                  //           <div className="col-span-full">
                  //             <label className="text-sm">Address</label>
                  //             <input
                  //               id="address"
                  //               type="text"
                  //               placeholder=""
                  //               name="address"
                  //               className="w-40 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  //             />
                  //           </div>
                  //           <div className="col-span-full sm:col-span-2">
                  //             <label className="text-sm">City</label>
                  //             <input
                  //               id="city"
                  //               type="text"
                  //               placeholder=""
                  //               name="city"
                  //               className="w-40 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  //             />
                  //           </div>
                  //           <div className="col-span-full sm:col-span-2">
                  //             <label className="text-sm">
                  //               State / Province
                  //             </label>
                  //             <input
                  //               id="state"
                  //               type="text"
                  //               placeholder=""
                  //               name="state"
                  //               className="w-40 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  //             />
                  //           </div>
                  //           <div className="col-span-full sm:col-span-2">
                  //             <label className="text-sm">ZIP / Postal</label>
                  //             <input
                  //               id="zip"
                  //               type="text"
                  //               placeholder=""
                  //               name="zip"
                  //               className="w-40 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  //             />
                  //           </div>
                  //         </div>

                  //         <div className="col-span-full sm:col-span-3">
                  //           <label className="text-sm">Any Instruction</label>
                  //           <input
                  //             id="username"
                  //             type="text"
                  //             name="instruction"
                  //             placeholder="Write here"
                  //             className="w-40 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  //           />
                  //         </div>
                  //       </div>
                  //     </div>

                  //     <button className="px-8 py-3 font-semibold rounded bg-cyan-700 text-white">
                  //       Purchase
                  //     </button>
                  //   </form>
                  // </section>
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
        </div>
      </div>
    </div>
  );
};

export default SingleServices;
