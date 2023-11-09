import React from "react";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet";
import Catagory from "../layouts/Catagory";
import PopulerServices from "../layouts/PopulerServices";
import Partner from "../layouts/Partner";
import Team from "../components/Team";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const catagories = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className="mt-3">
        <Banner></Banner>
      </div>
      <div>
        <Catagory catagories={catagories}></Catagory>
      </div>
      <div>
        <PopulerServices></PopulerServices>
      </div>

      <div className="mt-3">
        <Partner></Partner>
      </div>
      <div>
        <Team></Team>
      </div>
    </div>
  );
};

export default Home;
