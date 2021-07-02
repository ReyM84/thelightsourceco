import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Card = () => {
  return (
    <Box
      pos="relative"
      left=""
      height="20em"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      border="1p x solid red"
    >
      <Image
        h="10em"
        src="https://images.unsplash.com/photo-1613929300237-25a23d1c9d52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
      <Text>TEST TEST TEST</Text>
    </Box>
  );
};

export default Card;
