import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Footer } from "flowbite-react";
import Footers from "../components/Footers";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footers></Footers>
    </div>
  );
};

export default Main;
