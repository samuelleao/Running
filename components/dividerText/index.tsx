import React from "react";

import {
  Text,
  Stack,
  Divider,
} from "@chakra-ui/react";

export const DividerText = ({ text }): JSX.Element => {
  return (
    <Stack
    direction="row"
    position="relative"
    display="flex"
    justifyContent="center"
  >
    <Text
      bg="grey.3"
      paddingInline="0.4rem"
      color="grey.5"
      zIndex="2"
    >
      { text }
    </Text>
    <Divider
      orientation="horizontal"
      position="absolute"
      top="50%"
      zIndex="1"
    />
  </Stack>
  );
};
