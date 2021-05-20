import React, { useContext } from "react";
import logo from "../assets/image/xannyfood-logo.png"
import { Icon, InlineIcon } from '@iconify/react';
import telegramIcon from '@iconify-icons/bi/telegram';
import vkWithCircle from '@iconify-icons/entypo-social/vk-with-circle';
import instagramWithCircle from '@iconify-icons/entypo-social/instagram-with-circle';
 

const footer = () => {
  return (
    <div className="footer">
      <div className="left-section">
        <img src={logo} className="logo"/>
        <p className="footer-text copyright">© 2021 «XANNYFOOD»</p>
      </div>
      <div className="right-section">
        <p className="footer-text follow">Follow @ksankek</p>
        <div className="socials">
          <a href="https://vk.com/ksankek" target="_blank" className="vk"><Icon icon={vkWithCircle} className="icon"/></a>
          <a href="https://t.me/xannyxan" target="_blank" className="vk"><Icon icon={telegramIcon} className="icon"/></a>
          <a href="https://www.instagram.com/ksankek/" target="_blank" className="inst"><Icon icon={instagramWithCircle} className="icon"/></a>
        </div>
      </div>
    </div>
  );
};

export default footer;
