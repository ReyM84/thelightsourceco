import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      display={{ base: "none", sm: "flex" }}
      w={{ base: "0", sm: "70%", md: "60%", lg: "50%", xl: "30%" }}
      pos="relative"
      float="right"
      color="white"
      top="2em"
      decoration="none"
      z-indez="13"
    >
      <Link to="/" className="bogo">
        Home
      </Link>
      <Spacer />
      <Link to="/about">About Us</Link>
      <Spacer />
      <Link to="#">Portfolio</Link>
      <Spacer />
      <Link to="/contact">Contact Us</Link>
      <Spacer />
      <a
        href="https://www.emergencylight.net/"
        style={{ color: "#C53030" }}
        isExternal
      >
        Shop Now
      </a>
    </Flex>
  );
};

export default Navbar;
