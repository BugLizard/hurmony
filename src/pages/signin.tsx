import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import NextImage from "next/image";
import React, { useState } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";

import logo from "../img/HurmonyTrans.png";
import { GoogleLogin, GoogleUseUser } from "../lib/auth";
import { auth } from "../lib/firebase/firebase";
import { authState, AuthState, UserState } from "../lib/recoil/authRecoil";

//Todo:一通り作ったらflex対応

const Signin = () => {
  const [passwordShow, setPassWordShow] = useState(false);
  const handlePasswordClick = () => setPassWordShow(!passwordShow);

  const setAuth: SetterOrUpdater<AuthState> = useSetRecoilState(authState);
  const provider = new GoogleAuthProvider();
  const GoogleUser = GoogleUseUser();

  const handleGoogleLogin = () => {
    GoogleLogin().catch((error) => console.error(error));
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider).then((res) => {
        if (res) {
          const tempUser = {
            id: res.user.uid,
            name: res.user.displayName,
            email: res.user.email,
          };
          setAuth(tempUser);
        }
      });
    } catch {
      console.log("ログインに失敗しました");
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" marginTop="100px">
      <Box boxSize="left">
        <Box
          boxSize="2xl"
          mb="25px"
          display="flex"
          justifyContent="flex-start"
          marginLeft="6rem"
        >
          <NextImage
            src={logo}
            className="HurmonyLogo"
            alt="HurmonyLogo"
            height="600"
            width="600"
          />
        </Box>
      </Box>
      <Box
        boxSize="xl"
        bg="#D5EEFF"
        borderRadius="5%"
        marginRight="8rem"
        marginTop="20"
      >
        <Box boxSize="-webkit-fit-content" mb="25px" marginLeft="130px">
          <FormControl>
            <Heading marginTop="5rem" fontSize="2xl">
              Login
            </Heading>
            <Input
              marginTop="1rem"
              pr="4.5rem"
              placeholder="ID(メールアドレス)"
              size="sm"
              width="auto"
              variant="filled"
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                placeholder="PASSWORD"
                type={passwordShow ? "text" : "password"}
                size="sm"
                width="auto"
                variant="filled"
                marginTop="15px"
              />
              <InputRightElement>
                <Button
                  size="xs"
                  onClick={handlePasswordClick}
                  marginTop="25px"
                >
                  {passwordShow ? "隠す" : "確認"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <br />
            <Box marginLeft="3rem" display="contents">
              <Button marginTop="20px">ログイン</Button>
              <br />
              <Button
                marginTop="10px"
                marginRight="10px"
                onClick={handleGoogleLogin}
              >
                Googleでログイン
              </Button>
              <br />
              <Button marginTop="10px">新規登録</Button>
              <Text marginTop="10px" fontSize="1xs">
                パスワードを忘れた方はこちら
              </Text>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
