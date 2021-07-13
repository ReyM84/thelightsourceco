import React from "react";
import { Link, Flex, chakra } from "@chakra-ui/react";

const Number = () => {
  return (
    <Flex
      pos="absolute"
      float="right"
      right="20"
      top={{ base: "30", sm: "1" }}
      decoration="none"
    >
      <Link
        textDecoration="none"
        w="100"
        color="white"
        href="tel:1-800-282-5600"
      >
        <chakra.span color="red.600">Call</chakra.span>
        <chakra.span ml="0.5em">800-282-5600</chakra.span>
      </Link>
    </Flex>
  );
};

export default Number;
