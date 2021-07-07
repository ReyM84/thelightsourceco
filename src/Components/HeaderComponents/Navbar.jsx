import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Flex, Spacer, Box } from "@chakra-ui/layout";
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
        display={{ base: "none", sm: "flex" }}
        w={{ base: "0", sm: "60%", md: "60%", lg: "50%", xl: "30%" }}
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
              <Link to="/#">Portfolio</Link>
            </MenuItem>
            <MenuItem _focus={{ bg: "white", color: "red.600" }}>
              <Link to="/contact">Contact Us</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
