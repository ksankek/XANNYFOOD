import React from "react";
import Header from "../components/Header";
import AboutUsBlock from "../components/AboutUsBlock";
import SmallShop from "../components/SmallShop";
import { BrowserRouter } from "react-router-dom";

const MainPage = () => {
  return (
    <BrowserRouter>
      <Header/>
      <AboutUsBlock/>
      <SmallShop/>
    </BrowserRouter>
  );
};

export default MainPage;
