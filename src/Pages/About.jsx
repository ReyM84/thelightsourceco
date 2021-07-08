import React from "react";
import Header from "../Components/Header";
import { Box } from "@chakra-ui/layout";
import Hero from "../Components/Hero";
import Evan from "../Components/AboutComponents/Evan";
import Aboutinfo from "../Components/AboutComponents/Aboutinfo";
import Riv from "../Components/Riv";

const About = () => {
  return (
    <Box>
      <Box display="block" h="60vh">
        <Header />
        <Hero />
      </Box>
      <Riv />
      <Box pos="relative" top={{ base: "2em" }}>
        <Evan />
        <Aboutinfo />
      </Box>
    </Box>
  );
};

export default About;
