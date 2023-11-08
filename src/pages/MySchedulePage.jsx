import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import BookedServices from "../layouts/BookedServices";
import { data } from "autoprefixer";
import MyWorks from "../layouts/MyWorks";

const MySchedulePage = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `https://home-service-server-six.vercel.app/booked?userEmail?=${user.email}`;
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>My Schedual Page</title>
      </Helmet>
      <div className="grid grid-cols-2 justify-between">
        <div>
          <div className="grid grid-cols-2 p-3 gap-3 max-w-lg mx-auto">
            {bookings.map((booking) => (
              <BookedServices
                key={bookings._id}
                booking={booking}
              ></BookedServices>
            ))}
          </div>
        </div>
        <div>
          <MyWorks></MyWorks>
        </div>
      </div>
    </div>
  );
};

export default MySchedulePage;
