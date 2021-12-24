import React from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo__text">Городской сайт</div>
      </div>
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li>
            <NavLink to="/" className="nav__item">
              Пункт 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/point2" className="nav__item">
              Пункт 2
            </NavLink>
          </li>
          <li>
            <NavLink to="/point3" className="nav__item">
              Пункт 3
            </NavLink>
          </li>
          <li>
            <NavLink to="/point4" className="nav__item">
              Пункт 4
            </NavLink>
          </li>
          <li>
            <NavLink to="/point5" className="nav__item">
              Пункт 5
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
