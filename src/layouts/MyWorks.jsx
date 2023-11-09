import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import WorksCard from "./WorksCard";

const MyWorks = () => {
  const { user } = useContext(AuthContext);
  const [workings, setWorkings] = useState([]);
  const url = `http://localhost:5000/booked_bprovider?serviceProviderEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWorkings(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold">My Pending works</h2>
      {workings.map((working) => (
        <WorksCard key={working._id} working={working}></WorksCard>
      ))}
    </div>
  );
};

export default MyWorks;
