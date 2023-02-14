import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "../lib/auth/provider/AuthProvider";

type Props = {
  children: JSX.Element;
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <AuthProvider></AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
