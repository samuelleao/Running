import React, { ReactNode } from "react";
import { Image } from '@chakra-ui/react'

export const Logo = (): JSX.Element => {
  return (
    <Image
      src="img/logo.svg"
      alt="logo"
      title="Logo"
      width="257px"
      height="65px"
    />
  );
};
