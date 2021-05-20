import React, { useContext } from "react";
import {SHOP_ROUTE} from "../utils/Const";

const smallShop = () => {
  return (
    <div className="small-shop">
      <div className="items-wrapper">
        <h1 className="title">SHOP</h1>
        <div className="types Pizza">
          <h1 className="title-type">Pizza</h1>
          <div className="items">
            <div className="item pizza1">
              <h3 className="Name">"Pepperoni"</h3>
            </div>
            <div className="item pizza2">
              <h3 className="Name">"Margarita"</h3>
            </div>
            <div className="item pizza3">
              <h3 className="Name">"Diablo"</h3>
            </div>
            <div className="item pizza4">
              <h3 className="Name">"4 cheese"</h3>
            </div>
          </div>
        </div>
        <div className="types Salads">       
          <h1 className="title-type">Salads</h1>
          <div className="items">
            <div className="item salad1">
              <h3 className="Name">"Green"</h3>
            </div>
            <div className="item salad2">
              <h3 className="Name">"Hawaiian"</h3>
            </div>
            <div className="item salad3">
              <h3 className="Name">"Caesar"</h3>
            </div>
            <div className="item salad4">
              <h3 className="Name">"Greek"</h3>
            </div>
          </div>
        </div>
        <div className="types Hamburgers">
          <h1 className="title-type">Hamburgers</h1>
          <div className="items">
            <div className="item burg1">
              <h3 className="Name">"Salad 2X"</h3>
            </div>
            <div className="item burg2">
              <h3 className="Name">"Cheesy"</h3>
            </div>
            <div className="item burg3">
              <h3 className="Name">"Small"</h3>
            </div>
            <div className="item burg4">
              <h3 className="Name">"Classic"</h3>
            </div>
          </div>
        </div>
        <div className="types Drinks">
          <h1 className="title-type">Drinks</h1>
          <div className="items">
            <div className="item drink1">
              <h3 className="Name">"Coca-cola"</h3>
            </div>
            <div className="item drink2">
              <h3 className="Name">"Orange juice"</h3>
            </div>
            <div className="item drink3">
              <h3 className="Name">"Forest"</h3>
            </div>
            <div className="item drink4">
              <h3 className="Name">"Coffee"</h3>
            </div>
          </div>
        </div>
        <a href={SHOP_ROUTE} className="btn"><button className="big-button">GO TO <span>SHOP</span></button></a>
      </div>
    </div>
  );
};

export default smallShop;
