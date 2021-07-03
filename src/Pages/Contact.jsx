import React from "react";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import {
  Input,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box>
      <Box display="block" h="60vh">
        <Hero />
        <Header />
      </Box>
      <Flex>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="Name" />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default Contact;
