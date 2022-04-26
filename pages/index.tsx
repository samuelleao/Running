import {
  Text,
  Box,
  Container,
  Flex,
  Link,
} from "@chakra-ui/react";

import { Form } from "../components/form";
import { Heading1 } from "../components/headings";
import { Button } from "../components/buttons";
import { Input } from "../components/inputs";
import { FaUser, FaLock } from "react-icons/fa";
import { BsTwitter } from 'react-icons/bs'
import { Logo } from "../components/logo";
import { DividerText } from '../components/dividerText'
import { HeadPage } from '../components/head'

export default function Home() {
  return (
    <>
      <HeadPage title="Login" />
      <Flex
        as="main"
        bg="grey.1"
        h={["auto", "auto", "auto", "100vh"]}
        paddingY={["2rem", "2rem", "2rem", "0"]}
        alignItems="center"
        justifyContent="center"
      >
        <Container maxW="container.lg">
          <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={["2rem", "2rem", "2rem", "0"]}>
            <Box w={["100%", "100%", "100%", "50%"]} display="flex" flexDir="column" gap="2rem">
              <Logo />
              <Heading1 variant="h1" color="grey.6">
                Connecting developers in an amazing{" "}
                <Box display="inline" color="brand.1">
                  experience
                </Box>
              </Heading1>
              <Text variant="text_1" color="grey.5">
                Inspire your creativity with top-notch projects
              </Text>
              <Button>Register Now</Button>
            </Box>
            <Form w={["100%", "100%", "50%", "40%"]} borderRadius="sm">
              <Text fontSize="1.25rem" color="grey.6">Sign in to Running</Text>
              <Flex gap="1rem">
                <Button google>Sign in with Google</Button>
                <Button onlyIcon={<BsTwitter />}>Sign in with Twitter</Button>
              </Flex>
              <DividerText text="Or" />
              <Input type="text" placeholder="Username" icon={<FaUser />} />
              <Flex flexDir="column" gap="2">
                <Input
                  type="password"
                  placeholder="Password"
                  icon={<FaLock />}
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
              <Button disable>
                Login
              </Button>
            </Form>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
