import React from "react";
import {
  chakra,
  Text,
  Input,
  Flex,
  Box,
  Button,
  Textarea,
  Spacer,
  HStack,
  Heading,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import Hero from "../Components/Hero";
import Header from "../Components/Header";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vir035j",
        "template_lfucumi",
        e.target,
        "user_iyDuuN1y1xmFge4OGOwj4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div pos="relative">
      <Header />
      <Hero z-index="-100" />
      <Box
        borderSpacing="2em 2em"
        p="6"
        boxShadow="md"
        borderRadius="15"
        w="60%"
        pos="absolute"
        left="50%"
        top="80vh"
        transform=" translate(-50%, -50%)"
      >
        <HStack spacing="1em">
          <Heading margin="auto" textAlign="center" fontSize="3xl">
            Contact Us
          </Heading>
        </HStack>
        <chakra.form onSubmit={sendEmail}>
          <HStack>
            <Input type="text" id="name" name="name" placeholder="Name" />
            <Input type="text" id="email" name="email" placeholder="email" />
          </HStack>
          <Textarea
            type="text"
            id="message"
            name="message"
            placeholder="message"
          />
          <Button type="submit" color="white" bg="red.600">
            Submit
          </Button>
        </chakra.form>
      </Box>
    </div>
  );
};

export default Contact;
