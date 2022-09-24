import React, {
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  FormControl,
  InputLeftElement,
  Input as InputChakra,
  InputProps,
  FormHelperText,
  forwardRef,
} from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { FieldError } from "react-hook-form";

interface iprops extends InputProps {
  placeholder: string;
  icon?: IconType;
  type: string;
  name: string;
  error?: FieldError | null;
}

interface inputVariationOptions {
  [key: string]: string;
}

const inputVariation: inputVariationOptions = {
  error: "feedback.error",
  sucess: "feedback.sucess",
  focus: "grey.6",
  default: "grey.2",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, iprops> = (
  { placeholder, icon: Icon, type, name, error = null, ...rest },
  ref
): JSX.Element => {
  const [value, setValue] = useState("");

  const [variation, setVariation] = useState("default");

  useEffect(() => {
    error && setVariation("error");
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("sucess");
    }
  }, [error, value]);

  return (
    <FormControl w="100%">
      {Icon && (
        <InputLeftElement
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="50px"
          left="1rem"
          color="grey.5"
          pointerEvents="none"
        >
          <Icon />
        </InputLeftElement>
      )}

      <InputChakra
        {...rest}
        type={type}
        h="50px"
        placeholder={placeholder}
        bg="grey.2"
        paddingLeft="2.5rem"
        name={name}
        border="2px solid"
        borderColor={inputVariation[variation]}
        onBlurCapture={handleInputBlur}
        onChangeCapture={(e) => {
          setValue(e.currentTarget.value);
        }}
        _hover={{ background: "grey.4", borderColor: "grey.4" }}
        _focus={{
          borderColor: "grey.6",
          boxShadow: "none",
          background: "grey.2",
          color: "grey.6",
        }}
        ref={ref}
        _empty={{
          color: "grey.6",
        }}
      />
      {!!error && (
        <FormHelperText color="feedback.error">{error.message}</FormHelperText>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
