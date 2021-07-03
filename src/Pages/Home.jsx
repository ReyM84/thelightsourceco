import React from "react";
import { Image, Box, Spacer } from "@chakra-ui/react";
import Header from "../Components/Header";
import Card from "../Components/Card";

const Home = () => {
  return (
    <Box>
      <Box position="relative" h="40em">
        <Image
          objectFit="cover"
          w="100%"
          zIndex="-2"
          pos="absolute"
          h="40em"
          src="https://images.unsplash.com/photo-1613929300237-25a23d1c9d52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
        <Header />
      </Box>
      <Spacer />
      <Card />
    </Box>
  );
};

export default Home;
