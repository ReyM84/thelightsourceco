import React from "react";
import { Box, Spacer } from "@chakra-ui/react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <Box>
      <Box position="relative" h="40em">
        <Hero />
        <Header />
      </Box>
      <Spacer />
      <Card />
    </Box>
  );
};

export default Home;
