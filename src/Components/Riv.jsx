import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Riv = () => {
  return (
    <Box>
      <Box
        bg="#B1070C"
        h="0.5em"
        w="100vw"
        zIndex="1000"
        pos="absolute"
        top="60vh"
      />
      <Text display="none"> String delete</Text>
    </Box>
  );
};

export default Riv;
