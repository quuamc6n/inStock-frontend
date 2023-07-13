import React from "react";
import "./Header.scss";
import inStockLogo from "../../assets/images/Logo/InStock-Logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img className="navbar__logo" src={inStockLogo} alt="inStock logo" />
        <ul className="navbar__list">
          <li className="navbar__list-item navbar__list-item--warehouses">
            <NavLink className="navbar__list-link" to="warehouses">
              Warehouses
            </NavLink>
          </li>
          <li className="navbar__list-item navbar__list-item--inventory">
            <NavLink className="navbar__list-link" to="inventory">
              Inventory
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
