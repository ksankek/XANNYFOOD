import React, {useContext, useEffect} from "react";
import {Context} from "../index";
import {useHistory} from "react-router-dom";
import {addToCart} from "../http/basketAPI";
import { observer } from "mobx-react-lite";

const Product = observer(({product}) => {
  const { user } = useContext(Context);
  
  return (
  <div className="product">
    <img src={process.env.REACT_APP_API_URL + product.img}/>
    <div className="description">
      <h3 className="title">"{product.name}"</h3>
      <p className="desc-title weight">Weight: {product.weight}</p>
      <p className="desc-title struct">{product.struct}</p>
      <div className="price-button">
        <h3 className="title price">{product.price}$</h3>
        <button className="to-cart-button" onClick={() => addToCart(product.id, user.user.id)}>TO CART</button>
      </div>
    </div>
  </div>
  );
});

export default Product;
