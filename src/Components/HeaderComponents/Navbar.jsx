import React from "react";
import { Link, Flex, Spacer, Box } from "@chakra-ui/layout";

const Navbar = () => {
  return (
    <Flex
      display={{ base: "none", sm: "flex" }}
      w={{ base: "0", sm: "70%", md: "60%", lg: "50%", xl: "30%" }}
      pos="relative"
      right={{ base: "39", xl: "500" }}
      float="right"
      top={{ sm: "7", md: "10" }}
      color="white"
      decoration="none"
    >
      <Link className="bogo">Home</Link>
      <Spacer />
      <Link>About Us</Link>
      <Spacer />
      <Link>Portfolio</Link>
      <Spacer />
      <Link>Contact Us</Link>
      <Spacer />
      <Link color="red.600">Shop Now</Link>
    </Flex>
  );
};

export default Navbar;
