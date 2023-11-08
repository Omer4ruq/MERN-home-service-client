import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ManageServiceCard from "../layouts/ManageServiceCard";
import { Helmet } from "react-helmet";

const ManageServicePage = () => {
  const { user } = useContext(AuthContext);
  const [addedServices, setAddedService] = useState([]);
  const url = `https://home-service-server-six.vercel.app/services?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddedService(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Manage Service</title>
      </Helmet>
      <h2 className="text-xl font-semibold">Manage Services</h2>
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
