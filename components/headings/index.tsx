import React, { ReactNode } from 'react'
import { Heading, HeadingProps } from "@chakra-ui/react";

interface Iprops extends HeadingProps {
  children: ReactNode,
}

export const Heading1 = ({ children, ...rest }: Iprops): JSX.Element => {
  return (
    <Heading variant="h1" { ...rest }>
      {children}
    </Heading>
  );
};
