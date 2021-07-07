import React from "react";
import { Avatar, Box } from "@chakra-ui/react";

const Evan = () => {
  return (
    <Box>
      <Avatar
        display={{ sm: "none" }}
        size="xl"
        name="Evan Delaporte"
        src="https://www.disposetritium.com/wp-content/uploads/2014/05/evan.jpg"
        float="left"
        top={{ base: " 0em" }}
        left={{ base: "2%" }}
      />
      <Avatar
        size="2xl"
        name="Evan Delaporte"
        src="https://www.disposetritium.com/wp-content/uploads/2014/05/evan.jpg"
        float="left"
        top={{ base: " 0em" }}
        left={{ sm: "2%" }}
        display={{ base: "none", sm: "inline", xl: "none" }}
      />
      <Avatar
        size="4xl"
        display="none"
        name="Evan Delaporte"
        src="https://www.disposetritium.com/wp-content/uploads/2014/05/evan.jpg"
        float="left"
        top={{ base: " 0em" }}
        left={{ xl: "1%" }}
        display={{ base: "none", xl: "inline" }}
      />
    </Box>
  );
};

export default Evan;
