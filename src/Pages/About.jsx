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
        <Header />
        <Hero />
      </Box>
      <Box
        bg="#B1070C"
        h="0.5em"
        w="100vw"
        zIndex="1000"
        pos="absolute"
        top="60vh"
      />
      <Box pos="relative" top={{ base: "2em" }}>
        <Evan />
        <Aboutinfo />
      </Box>
    </Box>
  );
};

export default About;
