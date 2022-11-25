import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons8-sigma-64.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
