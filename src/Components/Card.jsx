import React from "react";
import {
  Flex,
  Image,
  Text,
  SimpleGrid,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";

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
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3 }}
      // minChildWidth="15em"
      spacing={{ base: "4", sm: "6", md: "16" }}
      width="80%"
      margin="auto"
      pos="relative"
      top={{ base: "-20", sm: "-10", md: "-8", lg: "8", xl: "56" }}
      p="4"
    >
      {content.map((content) => {
        return (
          <Flex
            display="block"
            pos="relative"
            height="auto"
            justifyContent="center"
            alignItems="center"
            boxShadow="xl"
            borderRadius="15"
            border="1px solid rgba(150,170,180,0.05)"
            w={{ base: "48", lg: "60" }}
          >
            <Image
              alt={content.title}
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
    </SimpleGrid>
  );
};

export default Card;
