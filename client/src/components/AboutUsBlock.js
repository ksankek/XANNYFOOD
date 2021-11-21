import React, { useContext } from "react";
import searchIco from "../assets/image/SearchIco.png";
import payIco from "../assets/image/MoneyIco.png";
import truckIco from "../assets/image/TruckIco.png";

const aboutUsBlock = () => {
  return (
    <div className="aboutUs-wrapper">
      <h1 className="title">О НАС</h1>
      <div className="aboutUs-info">
        <div className="aboutUs-block search-info">
          <img src={searchIco} />
          <h1 className="infoTitle">ПОИСК</h1>
          <p className="infoText">Вы находите понравившуюся еду, добавляете ее в корзину и продолжаете поиск.</p>
        </div>
        <div className="aboutUs-block pay-info">
          <img src={payIco} className="pay-icon" />
          <h1 className="infoTitle">ОПЛАТА</h1>
          <p className="infoText">Осталось совсем чуть-чуть, перед наслаждением. Оплатите товар удобным способом и ждите заказа.</p>
        </div>
        <div className="aboutUs-block delivery-info">
          <img src={truckIco} className="delivery-icon" />
          <h1 className="infoTitle">ДОСТАВКА</h1>
          <p className="infoText">Приготовьтесь к самой быстрой доставке. Мы уже уехали, чтобы доставить вам вкусную еду.</p>
        </div>
      </div>
    </div>
  );
};

export default aboutUsBlock;
