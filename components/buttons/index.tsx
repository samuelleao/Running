import React, { ReactNode } from "react";
import { BsGoogle } from "react-icons/bs";
import { Button as ButtonChakra } from "@chakra-ui/react";

interface iprops {
  disable?: boolean;
  children: ReactNode;
  google?: boolean,
  onlyIcon?: any
}

export const Button = ({
  children,
  disable,
  google,
  onlyIcon,
  ...props
}: iprops): JSX.Element => {
   
  if (disable) {
    return (
      <ButtonChakra
        bg="brand.4"
        paddingLeft="3rem"
        paddingRight="3rem"
        h="50px"
        color="grey.6"
        size="lg"
        w="100%"
        border="1px solid brand.2"
        _hover={{
          background: "brand.4",
          cursor: "not-allowed",
          PointerEvent: "none"
        }}
        _active={{
          background: "brand.4",
        }}
        _focus={{
          borderColor: "grey.4",
          boxShadow: "none",
        }}
        {...props}
      >
        {children}
      </ButtonChakra>
    );
  }


  if (google) {
    return (
      <ButtonChakra
        bg="google.1"
        paddingLeft="3rem"
        paddingRight="3rem"
        h="50px"
        color="grey.6"
        size="lg"
        w="max-content"
        leftIcon={<BsGoogle />}
        border="1px solid google.1"
        _hover={{
          background: "google.2",
        }}
        _active={{
          background: "google.1",
        }}
        _focus={{
          borderColor: "grey.4",
          boxShadow: "none",
        }}
        {...props}
      >
        {children}
      </ButtonChakra>
    );
  }

  if (onlyIcon) {
    return (
      <ButtonChakra
        bg="grey.2"
        paddingLeft="1.5rem"
        paddingRight="1.5rem"
        h="50px"
        color="grey.6"
        size="lg"
        w="max-content"
        border="1px solid grey.2"
        _hover={{
          background: "grey.4",
        }}
        _active={{
          background: "grey.2",
        }}
        _focus={{
          borderColor: "grey.4",
          boxShadow: "none",
        }}
        {...props}
      >
        {onlyIcon}
      </ButtonChakra>
    );
  }

  return (
    <ButtonChakra
      bg="brand.1"
      paddingLeft="3rem"
      paddingRight="3rem"
      h="50px"
      color="grey.6"
      size="lg"
      w="max-content"
      border="1px solid brand.2"
      _hover={{
        background: "brand.2",
      }}
      _active={{
        background: "brand.2",
      }}
      _focus={{
        borderColor: "grey.2",
        boxShadow: "none",
      }}
      {...props}
    >
      {children}
    </ButtonChakra>
  );
};
