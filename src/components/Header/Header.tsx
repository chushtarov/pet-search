import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div>Logo</div>
      <div>
        <ul>
          <li><NavLink to="/">Объявление</NavLink></li>
          <li><NavLink to="/">В добрые руки</NavLink></li>
          <li><NavLink to="/">О нас</NavLink></li>
          <li><NavLink to="/">О проекте</NavLink></li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Создать объявление</li>
          <li>Войти</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
