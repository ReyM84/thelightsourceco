import React from "react";
import {
  chakra,
  Input,
  Box,
  Button,
  Textarea,
  HStack,
  VStack,
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
        boxShadow="2xl"
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
          <HStack marginTop="3">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              focusBorderColor="red.600"
            />
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              focusBorderColor="red.600"
            />
          </HStack>
          <HStack marginTop="3">
            <Input
              type="tel"
              id="number"
              name="number"
              placeholder="Phone Number"
              focusBorderColor="red.600"
            />
            <Input
              type="text"
              id="company"
              name="company"
              placeholder="Company Name"
              focusBorderColor="red.600"
            />
          </HStack>
          <VStack>
            <Input
              mt="3"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              focusBorderColor="red.600"
            />
            <Textarea
              marginTop="3"
              type="text"
              id="message"
              name="message"
              placeholder="Message"
              focusBorderColor="red.600"
            />
          </VStack>
          <Button
            type="submit"
            color="white"
            bg="red.600"
            float="right"
            marginTop="3"
          >
            Submit
          </Button>
        </chakra.form>
      </Box>
    </div>
  );
};

export default Contact;
