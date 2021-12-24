import React from "react";
import { NavLink } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer__copywriter">
          <p>&copy; 2016 Городской сайт</p>
        </div>
        <ul className="footer__nav">
          <li>
            <NavLink to="#" className="footer-nav__item">
              Пользовательское соглашение
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="footer-nav__item">
              Инструкции
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="footer-nav__item">
              Рекламодателям
            </NavLink>
          </li>
        </ul>
        <div className="footer__made">
          <p>Сделано в Беларуси</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
