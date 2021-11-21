import React, { useContext } from "react";
import {SHOP_ROUTE} from "../utils/Const"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../assets/image/slider1.png";
import slide2 from "../assets/image/slider2.png";
import slide3 from "../assets/image/slider3.png";

const Header = () => {
  return (
      <div className="header-wrapper">
      <a href={SHOP_ROUTE}><button className="big-button"><span>Начать</span> покупки</button></a>
      <div className="header-title">
        <h1>Твой голод - наша проблема</h1>
        <p>Самая быстрая доставка, которую вы могли видеть.
        Свежие фрукты, лучшее мясо и самые сочные напитки</p>
      </div>
      <Carousel className="slider" 
      autoPlay={true} 
      infiniteLoop={true} 
      interval={3000} 
      showThumbs={false} 
      showStatus={false}
      showArrows={false}>
        <div className="slide1">
          <img src={slide1} />  
        </div>
        <div className="slide2">
          <img src={slide2} />
        </div> 
        <div className="slide3">
            <img src={slide3} />
        </div>
      </Carousel>
      </div>
  );
};

export default Header;
