import { Text, Flex, Link } from "@chakra-ui/react";
import { Form } from "src/components/Form";
import { Button } from "src/components/Buttons";
import { Input } from "src/components/Inputs";
import { FaUser, FaLock } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { DividerText } from "src/components/DividerText";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormValidate {
  username: string;
  password: string;
}

const shema = yup.object({
  username: yup
    .string()
    .email("usuário incorreto")
    .required("Username obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValidate>({ resolver: yupResolver(shema) });

  const onSubmit = (data: IFormValidate) => {
    console.log(data);
  };

  return (
    <Form
      w={["100%", "100%", "50%", "40%"]}
      borderRadius="sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Text fontSize="1.25rem" color="grey.6">
        Sign in to Running
      </Text>
      <Flex
        gap="1rem"
        justifyContent="space-between"
        alignItems="center"
        flexDir={["column", "column", "row", "row"]}
      >
        <Button w={["100%", "100%", "auto", "auto"]} google>
          Sign in with Google
        </Button>
        <Button w={["100%", "100%", "auto", "auto"]} onlyIcon={<BsTwitter />}>
          Sign in with Twitter
        </Button>
      </Flex>
      <DividerText text="Or" />
      <Input
        type="text"
        name="username"
        placeholder="Username"
        icon={FaUser}
        error={errors.username}
        {...register("username")}
      />
      <Flex flexDir="column" gap="2">
        <Input
          type="password"
          name="password"
          placeholder="Password"
          icon={FaLock}
          error={errors.password}
          {...register("password")}
        />
        <Link
          color="grey.5"
          ml="auto"
          _hover={{
            textDecoration: "none",
            color: "grey.6",
          }}
        >
          Forgot my password
        </Link>
      </Flex>
      <Button type="submit" w="100%">
        Login
      </Button>
    </Form>
  );
};
