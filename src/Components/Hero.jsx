import React from "react";
import { Box, Image } from "@chakra-ui/react";
import HeroCarousel from "react-hero-carousel";

const image = [
  {
    id: "0",
    img: "https://images.unsplash.com/photo-1613929300237-25a23d1c9d52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
];

const Hero = () => {
  return (
    <Box position="relative" zIndex="-100">
      <HeroCarousel>
        {image.map((image) => {
          return (
            <Image
              objectFit="cover"
              h="60vh"
              w="100%"
              borderBottom="0.5em solid #81070C"
              src={image.img}
            />
          );
        })}
      </HeroCarousel>
    </Box>
  );
};

export default Hero;
