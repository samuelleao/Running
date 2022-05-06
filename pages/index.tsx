import { Text, Box, Container, Flex } from "@chakra-ui/react";

import { Heading1 } from "src/components/Headings";
import { Button } from "src/components/Buttons";
import { Logo } from "src/components/Logo";
import { HeadPage } from "src/components/Head";
import { FormLogin } from "src/components/FormLogin";

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
        <Container
          maxW={[
            "container.sm",
            "container.sm",
            "container.md",
            "container.lg",
          ]}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap={["2rem", "2rem", "2rem", "0"]}
          >
            <Box
              w={["100%", "100%", "100%", "50%"]}
              display="flex"
              flexDir="column"
              gap="2rem"
            >
              <Logo />
              <Heading1 color="grey.6">
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
            <FormLogin />
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
