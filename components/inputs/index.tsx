import React from "react";
import {
  InputGroup,
  InputLeftElement,
  Input as InputChakra,
} from "@chakra-ui/react";

interface iprops {
  placeholder: string;
  icon?: any;
  type: string;
}

export const Input = ({
  placeholder,
  icon,
  type,
  ...props
}: iprops): JSX.Element => {
  return (
    <InputGroup w="100%">
      <InputLeftElement
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        color="grey.5"
        pointerEvents="none"
      >
        {icon}
      </InputLeftElement>

      <InputChakra
        {...props}
        type={type}
        h="50px"
        placeholder={placeholder}
        bg="grey.2"
        border="1px solid"
        borderColor="grey.2"
        _hover={{ background: "grey.4" }}
        _focus={{
          borderColor: "grey.6",
          boxShadow: "none",
          background: "grey.2",
          color: "grey.6",
        }}
        _empty={{
          color: "#fff",
        }}
      />
    </InputGroup>
  );
};
