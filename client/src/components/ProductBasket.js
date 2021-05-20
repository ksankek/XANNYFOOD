import React, {useContext, useEffect} from "react";
import {Context} from "../index";
import { deleteFromBasket, fetchBasket } from "../http/basketAPI"; 
import { observer } from "mobx-react-lite";

const BasketProduct = ({product}) => {
  const { basket } = useContext(Context);
  const { user } = useContext(Context);
  
  return (
  <div className="basket-product">
    <div className="basket-description">
      <h1 className="title">{product.name}</h1>
      <p className="basket-price">Price: {product.price}$</p>
    </div>
    <button className="del-button" onClick={() => {
      basket.deleteFromCart(product, user.user.id);
    }}>DEL</button>
  </div>
  );
};

export default BasketProduct;
