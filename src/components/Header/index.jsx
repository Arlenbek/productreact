import React from "react";
import Logo from "../../assets/images/Wildberies.jpg";
import { NavLink } from "react-router-dom";
import Home from "../Home";
const Header = () => {
  return (
    <header id="Header">
      <div className="container">
        <div className="content">
          <img src={Logo} alt="img" width={200} />
          <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/product"}>Product</NavLink>
            <NavLink to={"/backet"}> Backet</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
