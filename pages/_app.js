import { ChakraProvider } from "@chakra-ui/react";

import "@/styles/globals.css";
import customTheme from "@/styles/theme";

import { AuthProvider } from "@/lib/auth";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
