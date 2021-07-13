import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { chakra, Flex, Spacer, Box } from "@chakra-ui/react";
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box>
      <Flex
        display={{ base: "none", md: "flex" }}
        w={{ base: "0", md: "60%", lg: "60%", xl: "70%" }}
        pos="absolute"
        top={{ base: "8", lg: "6" }}
        left={{ base: "30%", lg: "25%" }}
        float="right"
        color="white"
        fontSize={{ lg: "24", xl: "28" }}
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
          color="red.600"
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
        display={{ md: "none" }}
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

export default Navbar;
