import React, { useContext } from "react";
import searchIco from "../assets/image/SearchIco.png";
import payIco from "../assets/image/MoneyIco.png";
import truckIco from "../assets/image/TruckIco.png";

const aboutUsBlock = () => {
  return (
    <div className="aboutUs-wrapper">
      <h1 className="title">ABOUT US</h1>
      <div className="aboutUs-info">
        <div className="aboutUs-block search-info">
          <img src={searchIco} />
          <h1 className="infoTitle">SEARCH</h1>
          <p className="infoText">You find the food you like, add it to your cart, search further.</p>
        </div>
        <div className="aboutUs-block pay-info">
          <img src={payIco} className="pay-icon" />
          <h1 className="infoTitle">PAY</h1>
          <p className="infoText">There was nothing left to enjoy. Pay for the goods in a convenient way and wait for the order.</p>
        </div>
        <div className="aboutUs-block delivery-info">
          <img src={truckIco} className="delivery-icon" />
          <h1 className="infoTitle">DELIVERY</h1>
          <p className="infoText">Get ready for the fastest delivery. We have already left to deliver you delicious food.</p>
        </div>
      </div>
    </div>
  );
};

export default aboutUsBlock;
