import React, { useEffect, useState } from "react";

const Plumbing = () => {
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/catagory?serviceType=plumbing`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return <div></div>;
};

export default Plumbing;
