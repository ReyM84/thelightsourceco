import React from "react";
import { Image, Box } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box>
      <Image
        top="4"
        left="3"
        w="10em"
        pos="absolute"
        src="https://tlsbucketca.s3.us-west-1.amazonaws.com/TLS-646x220.jpg"
      />
    </Box>
  );
};

export default Logo;
