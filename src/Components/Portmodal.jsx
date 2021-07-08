import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Slide1 from "./PortmodalSlides/Slide1";
import Slide2 from "./PortmodalSlides/Slide2";
import Slide3 from "./PortmodalSlides/Slide3";
import Slide4 from "./PortmodalSlides/Slide4";
import Slide5 from "./PortmodalSlides/Slide5";
import Slide6 from "./PortmodalSlides/Slide6";

const Portmodal = () => {
  return (
    <div>
      <SimpleGrid pos="relative" top="20vh" p="5" columns="3" spacing="2em">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
      </SimpleGrid>
    </div>
  );
};

export default Portmodal;
