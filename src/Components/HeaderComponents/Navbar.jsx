import React from "react";
import { Flex, Spacer, Box } from "@chakra-ui/layout";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      display={{ base: "none", sm: "flex" }}
      w={{ base: "0", sm: "70%", md: "60%", lg: "50%", xl: "30%" }}
      pos="relative"
      right={{ base: "39", xl: "500" }}
      float="right"
      top="2em"
      color="white"
      decoration="none"
    >
      <Link to="/" className="bogo">
        Home
      </Link>
      <Spacer />
      <Link to="/about">About Us</Link>
      <Spacer />
      <Link to="#">Portfolio</Link>
      <Spacer />
      <Link to="#">Contact Us</Link>
      <Spacer />
      <Link color="red.600">Shop Now</Link>
    </Flex>
  );
};

export default Navbar;
