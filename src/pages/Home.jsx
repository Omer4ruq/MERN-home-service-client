import React from "react";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet";
import Catagory from "../layouts/Catagory";
import PopulerServices from "../layouts/PopulerServices";
import Partner from "../layouts/Partner";
import Team from "../components/Team";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Catagory></Catagory>
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
