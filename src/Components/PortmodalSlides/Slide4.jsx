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

const Slide4 = () => {
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
          src="https://images.unsplash.com/photo-1505492537188-de71a52767cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
            <ModalHeader textAlign="center">TEST</ModalHeader>
            <ModalBody>
              <Image
                src="https://images.unsplash.com/photo-1505492537188-de71a52767cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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

export default Slide4;
