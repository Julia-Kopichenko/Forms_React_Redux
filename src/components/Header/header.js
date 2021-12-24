import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo__text">Городской сайт</div>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <NavLink to="/point1" className="nav__item">
            Пункт 1
          </NavLink>
          <NavLink to="/point2" className="nav__item">
            Пункт 2
          </NavLink>
          <NavLink to="/point3" className="nav__item">
            Пункт 3
          </NavLink>
          <NavLink to="/point4" className="nav__item">
            Пункт 4
          </NavLink>
          <NavLink to="/point5" className="nav__item">
            Пункт 5
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
