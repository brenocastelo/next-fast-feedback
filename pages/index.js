import Head from "next/head";
import { Button, Heading, Text, Code, Flex } from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";
import { Logo } from "@/styles/theme";

export default function Home() {
  const { user, isLoading, signIn, signOut } = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      justify="center"
      align="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Logo />

      <Heading>Fast Feedback</Heading>
      {user ? (
        <Button mt={4} size="sm" onClick={(e) => signOut()}>
          Sign Out
        </Button>
      ) : (
        <Button
          isLoading={isLoading}
          mt={4}
          size="sm"
          onClick={(e) => signIn()}
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
}
