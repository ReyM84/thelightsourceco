import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import {
  chakra,
  Flex,
  Spacer,
  Box,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navneg = () => {
  return (
    <Box>
      <Flex
        display={{ base: "none", sm: "flex" }}
        w={{ base: "0", sm: "60%", md: "60%", lg: "50%", xl: "30%" }}
        pos="absolute"
        top="2em"
        left="30%"
        float="right"
        color="black"
        decoration="none"
        z-indez="13"
      >
        <Link to="/" className="bogo">
          Home
        </Link>
        <Spacer />
        <Link to="/about">About Us</Link>
        <Spacer />
        <Link to="/portfolio">Portfolio</Link>
        <Spacer />
        <Link to="/contact">Contact Us</Link>
        <Spacer />
        <chakra.a
          href="https://www.emergencylight.net/"
          style={{ color: "red.600" }}
          isExternal
        >
          Shop Now
        </chakra.a>
      </Flex>
      <Box
        pos="relative"
        float="right"
        top="2.5em"
        right="-2em"
        display={{ sm: "none" }}
      >
        <Menu>
          <MenuButton
            color="red.600"
            colorScheme="transparent"
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList color="white" bg="red.600">
            <MenuItem _focus={{ bg: "white", color: "red.600" }}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem _focus={{ bg: "white", color: "red.600" }}>
              <Link to="/about">About Us</Link>
            </MenuItem>
            <MenuItem _focus={{ bg: "white", color: "red.600" }}>
              <Link to="/portfolio">Portfolio</Link>
            </MenuItem>
            <MenuItem _focus={{ bg: "white", color: "red.600" }}>
              <Link to="/contact">Contact Us</Link>
            </MenuItem>
            <MenuItem _focus={{ bg: "white", color: "red.600" }}>
              <chakra.a href="https://www.emergencylight.net/">
                Shop Now!
              </chakra.a>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navneg;
