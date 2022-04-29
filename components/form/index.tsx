import React from "react";
import { Box } from "@chakra-ui/react";

export const Form = ({ children, ...props }): JSX.Element => {
  return (
    <Box
      as="form"
      w="40%"
      bg="grey.3"
      p={["1rem","2rem","2rem","2rem"]}
      display="flex"
      flexDirection="column"
      gap="2rem"
      {...props}
    >
      {children}
    </Box>
  );
};
