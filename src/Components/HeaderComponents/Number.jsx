import React from "react";
import { Link, Flex } from "@chakra-ui/layout";

const Number = () => {
  return (
    <Flex pos="absolute" float="right" right="20" top="1">
      <Link w="100" color="white" href="#">
        <span style={{ color: "#C53030" }}>Call</span>
        <span style={{ marginLeft: "0.5em" }}>800-282-5600</span>
      </Link>
    </Flex>
  );
};

export default Number;
