import React from "react";
import {useLocation} from "react-router-dom";
import {PIZZA_ROUTE, SALADS_ROUTE, HAMBURGERS_ROUTE, DRINKS_ROUTE} from "../utils/Const";
import PizzaPage from "./ProductPizza";
import SaladsPage from "./ProductSalads";
import BurgersPage from "./ProductBurgers";
import DrinksPage from "./ProductDrinks";

const ProductList = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
  <div className="product-list">
    {
      path === PIZZA_ROUTE ?
      <PizzaPage/>
      :
      path === SALADS_ROUTE ?
      <SaladsPage/>
      :
      path === HAMBURGERS_ROUTE ?
      <BurgersPage/>
      :
      path === DRINKS_ROUTE ?
      <DrinksPage/>
      :
      <h1 className="title">Not found</h1>
    }
  </div>
  );
};

export default ProductList;
