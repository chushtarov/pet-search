import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around items-center h-[50px] text-[16px] uppercase bg-slate-200">
      <div><NavLink to="/">Logo</NavLink></div>
      <div className="w-[580px]">
        <ul className="flex justify-between">
          <li><NavLink to="/ads">Объявления</NavLink></li>
          <li><NavLink to="/give">В добрые руки</NavLink></li>
          <li><NavLink to="/help">Помощь</NavLink></li>
          <li><NavLink to="/about">О проекте</NavLink></li>
        </ul>
      </div>
      <div className="w-[330px]">
        <ul className="flex justify-between items-center">
          <li><NavLink to="/new">Создать объявление</NavLink></li>
          <li>Войти</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
