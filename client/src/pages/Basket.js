import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import {Context} from "../index";
import BasketProduct from "../components/ProductBasket";
import { fetchBasket, deleteAll } from "../http/basketAPI";

const Basket = observer(() => {
  const { basket } = useContext(Context);
  const { user } = useContext(Context);
  const { product } = useContext(Context);

  useEffect( () =>{
    fetchBasket(user.user.id).then(data => basket.setBasket(data,product));
  }, [])

  return (
    <div className="basket">
      { basket.viewBasket.length ?
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          {basket.viewBasket.map(product => 
          <BasketProduct key={product.id} product={product}/>
          )}
          <button className="big-button" onClick={ () => {alert(`Total cost = ${basket.totalCost}`); basket.makeOrder(); deleteAll()}}>PAY IT</button>
        </div>
        :
        <h1 className="title null-basket">Cart is empty</h1>
      }
    </div>
  );
});

export default Basket;
