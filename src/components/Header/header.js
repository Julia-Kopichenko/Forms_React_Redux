import React from "react";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo__text">Городской сайт</div>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">Пункт 1</li>
          <li className="nav__item">Пункт 2</li>
          <li className="nav__item">Пункт 3</li>
          <li className="nav__item">Пункт 4</li>
          <li className="nav__item">Пункт 5</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header