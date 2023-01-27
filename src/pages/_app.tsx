import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { GoogleUseAuth } from "../lib/auth";

type Props = {
  children: JSX.Element;
};

const Auth = ({ children }: Props): JSX.Element => {
  const isLoading = GoogleUseAuth();

  return isLoading ? <p>Loading...</p> : children;
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Auth>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Auth>
    </RecoilRoot>
  );
}

export default MyApp;
