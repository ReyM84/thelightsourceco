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
      <Box
        bg="#B1070C"
        h="0.5em"
        w="100vw"
        pos="absolute"
        top={{
          base: "27.25em",
          sm: "15.4em",
          md: "38.4em",
          lg: "28.8em",
          xl: "31.75em",
        }}
        zIndex="1000"
      />
      <Box pos="relative" top={{ base: "2em" }}>
        <Evan />
        <Aboutinfo />
      </Box>
    </Box>
  );
};

export default About;
