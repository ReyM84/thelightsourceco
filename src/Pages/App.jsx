import React from "react";
import "./App.css";
import Header from "../Components/Header";
import Card from "../Components/Card";
import { ChakraProvider, Box, Image } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <div className="App">
        <Box>
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
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          padding="0"
          pos="relative"
          top="50em"
        >
          <Card />
        </Box>
      </div>
    </ChakraProvider>
  );
};

export default App;
