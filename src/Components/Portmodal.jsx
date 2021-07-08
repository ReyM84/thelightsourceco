import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Slide1 from "./PortmodalSlides/Slide1";
import Slide2 from "./PortmodalSlides/Slide2";
import Slide3 from "./PortmodalSlides/Slide3";

let slides = [
  {
    id: "0",
    title: "Slide1",
    description:
      "Dragée donut jelly jelly marzipan ice cream cookie brownie. Powder icing brownie. Cheesecake fruitcake chocolate bar. Carrot cake muffin dragée pudding pie dragée jujubes croissant candy.",
    img: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: "1",
    title: "Slide2",
    description:
      "Dragée donut jelly jelly marzipan ice cream cookie brownie. Powder icing brownie. Cheesecake fruitcake chocolate bar. Carrot cake muffin dragée pudding pie dragée jujubes croissant candy.",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: "2",
    title: "Slide3",
    description:
      "Dragée donut jelly jelly marzipan ice cream cookie brownie. Powder icing brownie. Cheesecake fruitcake chocolate bar. Carrot cake muffin dragée pudding pie dragée jujubes croissant candy.",
    img: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  },
];

const Portmodal = () => {
  return (
    <div>
      <SimpleGrid pos="relative" top="40vh" columns="3" spacing="2em">
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </SimpleGrid>
    </div>
  );
};

export default Portmodal;
