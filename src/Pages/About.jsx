import React from "react";
import Header from "../Components/Header";
import { Box } from "@chakra-ui/layout";
import Hero from "../Components/Hero";
import Evan from "../Components/AboutComponents/Evan";
import Aboutinfo from "../Components/AboutComponents/Aboutinfo";

const About = () => {
  return (
    <Box>
      <Box display="block" h="60vh">
        <Hero />
        <Header />
      </Box>
      <Box>
        <Evan />
        <Aboutinfo />
      </Box>
    </Box>
  );
};

export default About;
