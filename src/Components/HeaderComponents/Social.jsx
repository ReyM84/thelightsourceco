import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const Social = () => {
  return (
    <Flex postion="relative" float="right" top="1px">
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
