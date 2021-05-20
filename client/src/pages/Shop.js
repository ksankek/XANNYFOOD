import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import {PIZZA_ROUTE, SALADS_ROUTE, HAMBURGERS_ROUTE, DRINKS_ROUTE} from "../utils/Const";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Shop = observer(() => {
  const history = useHistory();

  return (
    <div className="shop">
      <h1 className="title">SHOP</h1>
      <div className="categories">
        <a style={{cursor:"pointer"}} onClick={() => history.push(PIZZA_ROUTE)}><div className="category category-pizza">
          <h1 className="category-title">Pizza</h1>
        </div></a>
        <a style={{cursor:"pointer"}} onClick={() => history.push(SALADS_ROUTE)}><div className="category category-salad">
          <h1 className="category-title">Salads</h1>
        </div></a>
        <a style={{cursor:"pointer"}} onClick={() => history.push(HAMBURGERS_ROUTE)}><div className="category category-burgers">
          <h1 className="category-title">Burgers</h1>
        </div></a>
        <a style={{cursor:"pointer"}} onClick={() => history.push(DRINKS_ROUTE)}><div className="category category-drinks">
          <h1 className="category-title">Drinks</h1>  
        </div></a>
      </div>
    </div>
  );
});

export default Shop;
