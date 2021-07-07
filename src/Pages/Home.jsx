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
      <Spacer />
      <Card />
    </Box>
  );
};

export default Home;
