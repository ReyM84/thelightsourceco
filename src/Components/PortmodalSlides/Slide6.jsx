import React from "react";
import {
  Box,
  Image,
  Modal,
  Text,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

const Slide6 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Box
        onClick={onOpen}
        boxShadow="0 7px 30px -10px rgba(150,170,180,0.5)"
        borderRadius="15"
        border="1px solid rgba(150,170,180,0.05)"
        bg="gray"
        height="20em"
        width="auto"
        margin=" 0 auto"
      >
        <Image
          src="https://images.unsplash.com/photo-1506059612708-99d6c258160e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
          w="26em"
          borderTopRadius="15"
          h="70%"
        />
        <Modal
          isCentered="true"
          motionPreset="slideInBottom"
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalContent>
            <ModalHeader>
              <Text textAlign="center">TEST</Text>
              <Text onClick={onClose} textAlign="right">
                X
              </Text>
            </ModalHeader>
            <ModalBody>
              <Image
                src="https://images.unsplash.com/photo-1506059612708-99d6c258160e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                w="26em"
              />
              <Text>
                Dragée donut jelly jelly marzipan ice cream cookie brownie.
                Powder icing brownie. Cheesecake fruitcake chocolate bar. Carrot
                cake muffin dragée pudding pie dragée jujubes croissant candy.
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default Slide6;
