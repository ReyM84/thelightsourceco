import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

const Social = () => {
  return (
    <Flex float="right">
      <Image
        height="8"
        p="1"
        src="https://www.emergencylight.net/content/images/Facebook.png"
      />
      <Image
        height="8"
        p="1"
        src="https://www.emergencylight.net/content/images/Linkedin.png"
      />
    </Flex>
  );
};

export default Social;
