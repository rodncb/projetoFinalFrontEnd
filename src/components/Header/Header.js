import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <Link to={ROUTES.MAIN} className="header__logo">
          <span className="header__logo-icon">🎬</span>
          <span className="header__logo-text">Movie Search</span>
        </Link>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link
                to={ROUTES.MAIN}
                className={`header__nav-link ${
                  location.pathname === ROUTES.MAIN
                    ? "header__nav-link_active"
                    : ""
                }`}
              >
                Início
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to={ROUTES.SEARCH}
                className={`header__nav-link ${
                  location.pathname === ROUTES.SEARCH
                    ? "header__nav-link_active"
                    : ""
                }`}
              >
                Buscar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
