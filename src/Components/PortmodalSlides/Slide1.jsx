import React from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Slide1 = () => {
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
          src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          w="26em"
          borderTopRadius="15"
        />
        <Modal
          isCentered="true"
          motionPreset="slideInBottom"
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalContent>
            <ModalHeader>TEST</ModalHeader>
            <ModalBody>
              <Image
                src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
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

export default Slide1;
