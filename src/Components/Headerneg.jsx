import React from "react";
import Navneg from "./HeaderComponents/Navneg";
import Social from "./HeaderComponents/Social";
import Numberneg from "./HeaderComponents/Numberneg";
import Logo from "./HeaderComponents/Logo";

const Headerneg = () => {
  return (
    <div>
      <Logo />
      <Numberneg />
      <Social />
      <Navneg />
    </div>
  );
};

export default Headerneg;
