import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ManageServiceCard from "../layouts/ManageServiceCard";

const ManageServicePage = () => {
  const { user } = useContext(AuthContext);
  const [addedServices, setAddedService] = useState([]);
  const url = `http://localhost:5000/services?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddedService(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold">My Pending works</h2>
      <div>
        {addedServices.map((addedService) => (
          <ManageServiceCard
            key={addedService._id}
            addedService={addedService}
          ></ManageServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ManageServicePage;
