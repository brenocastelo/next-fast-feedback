import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

import "@/styles/globals.css";
import customTheme from "@/styles/theme";

import { AuthProvider } from "@/lib/auth";

const GlobalStyle = ({ children }) => {
  return (
    <Global
      styles={css`
        html {
          min-width: 360px;
          scroll-bahavior: smooth;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    >
      {children}
    </Global>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
