import React, { useContext } from "react";
import {observer} from "mobx-react-lite";
import {useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, BASKET_ROUTE, MAIN_ROUTE, PIZZA_ROUTE, SALADS_ROUTE, HAMBURGERS_ROUTE, DRINKS_ROUTE} from "../utils/Const";
import { Context } from "../index";
import { Icon, InlineIcon } from '@iconify/react';
import roundAccountCircle from '@iconify-icons/ic/round-account-circle';
import shoppingBasket2Line from '@iconify-icons/ri/shopping-basket-2-line';
import logo from "../assets/image/xannyfood-logo.png"
import * as Scroll from 'react-scroll';

const NavBar = observer(() => {
  let scr = Scroll.animateScroll;
  const { user } = useContext(Context);
  const history = useHistory()
  const location = useLocation();
  const path = location.pathname;
  
  const logOut = () => {
    localStorage.setItem('token','');
    user.setUser({});
    user.setIsAuth(false);
  }

  return (
  <div className="NavBar">
    <img src={logo} alt="logo"/>
    <ul>
      {
        path === MAIN_ROUTE ?
        <li className="selected"><a style={{cursor:"pointer"}} onClick={() => scr.scrollToTop()}>HOME</a></li>
        :
        <li><a href="" style={{cursor:"pointer"}} onClick={() => history.push(MAIN_ROUTE)}>HOME</a></li>
      }
      <li><a href="#" onClick={() => scr.scrollTo(660)}>ABOUT US</a></li>
      {
        path === SHOP_ROUTE || path === PIZZA_ROUTE || path === SALADS_ROUTE || path === HAMBURGERS_ROUTE || path === DRINKS_ROUTE ?
        <li className="selected"><a style={{cursor:"pointer"}} onClick={() => history.push(SHOP_ROUTE)}>SHOP</a></li>
        :
        <li><a href="" style={{cursor:"pointer"}} onClick={() => history.push(SHOP_ROUTE)}>SHOP</a></li>
      }
      <li><a href="#" onClick={() => scr.scrollToBottom()}>CONTACT</a></li>
  </ul>
  {user.isAuth ? 
  <div className="auth-wrapper">
    <div className="auth">
      <a href="" style={{cursor:"pointer"}} onClick={() => logOut()}>LOG OUT</a>
    </div>
    <div className="cart">
    {
      path === BASKET_ROUTE ?
      <a className="selected" href={BASKET_ROUTE}>CART
      <Icon className="selected cartIcon" icon={shoppingBasket2Line} /></a>
      :
      <a href={BASKET_ROUTE}>CART
      <Icon className="cartIcon" icon={shoppingBasket2Line} /></a>
    }  
  </div>
  </div>   
  : 
  <div className="auth-wrapper">
    <div className="auth">
      <div style={{visibility:"visible"}} className="login">
        <a onClick={() => history.push(LOGIN_ROUTE)}><Icon className="accountIcon" icon={roundAccountCircle} />
        <input className="authButton" type="button" value="LOG IN"/></a>
      </div>
      <a href="" style={{cursor:"pointer"}} onClick={() => history.push(REGISTRATION_ROUTE)}>SIGN IN</a> 
    </div>
  </div>  
  }
  </div>
  );
});

export default NavBar;
