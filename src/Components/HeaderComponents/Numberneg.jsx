import React from "react";
import { Link, Flex } from "@chakra-ui/layout";

const Numberneg = () => {
  return (
    <Flex pos="absolute" float="right" right="20" top="1" decoration="none">
      <Link w="100" color="black" href="#">
        <span style={{ color: "#C53030" }}>Call</span>
        <span style={{ marginLeft: "0.5em" }}>800-282-5600</span>
      </Link>
    </Flex>
  );
};

export default Numberneg;
