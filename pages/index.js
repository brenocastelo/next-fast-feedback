import Head from "next/head";
import { Button, Heading, Text, Code } from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <main>
        <Heading>Fast Feedback</Heading>
        {auth.isLoading ? (
          <Text>Loading ...</Text>
        ) : (
          <Text>
            Email:
            <Code>{auth.user ? auth.user.email : "None"}</Code>
          </Text>
        )}
      </main>

      {auth.user ? (
        <Button onClick={(e) => auth.signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={(e) => auth.signIn()}>Sign In</Button>
      )}
    </div>
  );
}
