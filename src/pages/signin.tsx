import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { signInWithEmailAndPassword } from "firebase/auth";
import NextImage from "next/image";
import { useRouter } from "next/router";

import React, { useState } from "react";

import logo from "../img/HurmonyTrans.png";
import { auth } from "../lib/firebase/firebase";

import { FirebaseError } from "firebase/app";
import { useAuthContext } from "../lib/auth/provider/AuthProvider";
import { AuthGuard } from "../lib/auth/component/AuthGuard/AuthGuard";

//Todo:一通り作ったらflex対応

const Signin = () => {
  //ログイン状況
  const { user } = useAuthContext();
  //フォーム
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  //パスワードの表示非表示切り替え
  const [passwordShow, setPassWordShow] = useState(false);
  //ロード中判定
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const router = useRouter();

  const handlePasswordClick = () => setPassWordShow(!passwordShow);

  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);
      setUserEmail("");
      setUserPassword("");
      toast({
        title: "ログインしました",
        status: "success",
        position: "top",
      });
    } catch (e) {
      toast({
        title: "エラーが発生しました",
        status: "error",
        position: "top",
      });
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    } finally {
    }
    setIsLoading(false);
  };

  return (
    <AuthGuard>
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
                onChange={(e) => setUserEmail(e.target.value)}
                variant="filled"
              />
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  placeholder="PASSWORD"
                  type={passwordShow ? "text" : "password"}
                  onChange={(e) => setUserPassword(e.target.value)}
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
                <Button
                  marginTop="20px"
                  isLoading={isLoading}
                  onClick={(e) => {
                    handleLogin(e);
                  }}
                >
                  ログイン
                </Button>
                <br />
                <Button marginTop="10px" marginRight="10px">
                  Googleでログイン
                </Button>
                <br />
                <NextLink href="/signup">
                  <Button marginTop="10px">新規登録</Button>
                </NextLink>
                <Text marginTop="10px" fontSize="1xs">
                  パスワードを忘れた方はこちら
                </Text>
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </AuthGuard>
  );
};

export default Signin;
