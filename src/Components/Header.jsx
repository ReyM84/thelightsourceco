import React from "react";
import Navbar from "./HeaderComponents/Navbar";
import Social from "./HeaderComponents/Social";
import Number from "./HeaderComponents/Number";
import Logo from "./HeaderComponents/Logo";

const Header = () => {
  return (
    <div>
      <Logo />
      <Number />
      <Social />
      <Navbar />
    </div>
  );
};

export default Header;
