import React from "react";
import { Box, Spacer } from "@chakra-ui/react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Hero from "../Components/Hero";
import Riv from "../Components/Riv";

const Home = () => {
  return (
    <Box pos="relative">
      <Box position="relative" h="40em">
        <Header />
        <Hero />
      </Box>
      <Riv />
      <Spacer />
      <Card />
    </Box>
  );
};

export default Home;
