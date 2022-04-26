import React from 'react'

import { Heading } from "@chakra-ui/react";

export const Heading1 = ({ children, ...props }): JSX.Element => {
  return (
    <Heading { ...props }>
      {children}
    </Heading>
  );
};
