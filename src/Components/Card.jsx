import React from "react";
import styled from "styled-components";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

let content = [
  {
    id: "1",
    title: "This is a test title",
    description: "THIS WILL BE THE ",
    img: "https://cdn11.bigcommerce.com/s-2kbpw1b/images/stencil/1280x1280/products/118/96/Class-1-Division-1-Emergency-Light-Two-Lamps__26425.1527994315.jpg?c=2",
  },
  {
    id: "2",
    title: "This is a test title",
    description: "THIS WILL BE THE SPOT FOR THE DESCRIPTION",
    img: "https://cdn11.bigcommerce.com/s-2kbpw1b/images/stencil/1280x1280/products/159/862/photoluminescent-exit-sign-r__38883.1523753286.jpg?c=2",
  },
  {
    id: "3",
    title: "This is a test title",
    description: "THIS WILL BE THE SPOT FOR THE DESCRIPTION",
    img: "https://cdn11.bigcommerce.com/s-2kbpw1b/images/stencil/1280x1280/products/71/74/Recessed-Can-Emergency-Light-Suspeded-T-Bar-Ceiling__62804.1517895327.jpg?c=2",
  },
];

const Card = () => {
  return (
    <Box display="flex" justifyContent="center" marginLeft="5em">
      {content.map((content) => {
        return (
          <Flex
            margin="auto"
            w="15em"
            display="block"
            pos="relative"
            height="auto"
            boxShadow=" 0 7px 30px -10px rgba(150,170,180,0.5)"
            borderRadius="15"
            border="1px solid rgba(150,170,180,0.05)"
          >
            <Image
              display="block"
              borderRadius="15px 15px 0 0"
              h="10em"
              objectFit="cover"
              w="auto"
              src={content.img}
            />
            <Text padding="2" fontSize="1.25em" fontWeight="600">
              {content.title}
            </Text>
            <Text padding="2" fontSize="0.75em">
              {content.description}
            </Text>
          </Flex>
        );
      })}
    </Box>
  );
};

export default Card;
