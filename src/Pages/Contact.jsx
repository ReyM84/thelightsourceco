import React from "react";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import {
  Input,
  InputGroup,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={5}
        p="5"
        border="2px solid #B1070C"
        w="80%"
        pos="relative"
        // top="65vh"
        margin="auto"
        top="-20em"
      >
        <GridItem colSpan={2}>
          <Input placeholder="Name" />
        </GridItem>
        <GridItem colSpan={2}>
          <Input placeholder="Email" />
        </GridItem>
        <GridItem colSpan={2}>
          <Input placeholder="Phone Number" />
        </GridItem>
        <GridItem colSpan={2}>
          <Input placeholder="Company" />
        </GridItem>
        <GridItem colSpan={4}>
          <Textarea placeholder="Comments" />
        </GridItem>
        <Button float="right" />
      </Grid>
    </Box>
  );
};

export default Contact;
