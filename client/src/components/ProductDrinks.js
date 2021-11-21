import React, {useContext, useState, useEffect} from "react";
import { Icon, InlineIcon } from '@iconify/react';
import searchIcon from '@iconify-icons/akar-icons/search';
import {Context} from "../index";
import Product from "./Product";
import { fetchProductsWithId, fetchTypes } from "../http/productApi";
import { Spinner } from "react-bootstrap"
import { observer } from "mobx-react-lite";


const DrinksPage = observer(() => {
  const {product} = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("");

  useEffect( () => {
    fetchTypes().then(data => product.setTypes(data));
    fetchProductsWithId(4).then(data => product.setProducts(data)).finally( () => setLoading(false));;
  }, [])

  if(loading){
    return <Spinner style={{margin: "220.5px",}} animation={"grow"}/>
  }

  const filteredItems = product.products.filter(product => {
    return product.name.toLowerCase().includes(searchItem.toLowerCase()); 
  });

  return (
  <div className="product-list drinks-page">
    <h1 className="title">Напитки</h1>
    <div className="search-wrapper">
      <Icon className="search-icon" icon={searchIcon} />
      <input className="search-bar" type="text" onChange={(event) => setSearchItem(event.target.value)}/>
    </div>
    <div className="products">
      {filteredItems.length ? 
      filteredItems.map(product =>
          <Product key={product.id} product={product}/>
      )
      :
      <h1 className="title">Продуктов не найдено</h1>
      }
    </div>
  </div>
  );
});

export default DrinksPage;
