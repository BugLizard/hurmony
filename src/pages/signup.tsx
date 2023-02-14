import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Select,
  Stack,
} from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, setDoc } from "firebase/firestore";
import NextImage from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../img/HurmonyTrans.png";
import { AuthGuard } from "../lib/auth/component/AuthGuard/AuthGuard";
import { auth, db } from "../lib/firebase/firebase";

//Todo:一通り作ったらflex対応

interface DivCheck {
  id: number;
  name: string;
  checked: boolean;
  disabled: boolean;
}

const Signup = () => {
  //パスワード表示フラグ
  const [passwordShow, setPassWordShow] = useState(false);

  //フォーム
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [useOrganization, setUseOrganization] = useState("");

  //パスワード表示切り替え
  const handlePasswordClick = () => setPassWordShow(!passwordShow);

  const router = useRouter();

  //会員登録処理
  const singUpHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const usersCollectionRef = collection(db, "users");

    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      await addDoc(usersCollectionRef, {
        name: userName,
        mail: userEmail,
        password: userPassword,
        organization: useOrganization,
      });
      router.push("/mypage/profileEdit");
    } catch (error: any) {
      console.log(error);
      switch (error.toString()) {
        case "auth/invalid-email":
          alert("正しいメールアドレスを入力してください");
          break;
      }
    }
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
            <FormControl isRequired>
              <Heading marginTop="2rem" fontSize="2xl">
                会員登録
              </Heading>
              <FormLabel marginTop="20px">ID（メールアドレス）</FormLabel>
              <Input
                pr="4.5rem"
                type="email"
                placeholder="メールアドレスを入力してください"
                size="sm"
                width="auto"
                variant="filled"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel marginTop="20px">パスワード</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  placeholder="8文字以上"
                  type={passwordShow ? "text" : "password"}
                  size="sm"
                  width="auto"
                  variant="filled"
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                />
                <InputRightElement>
                  <Button
                    size="sm"
                    onClick={handlePasswordClick}
                    marginTop="-10px"
                  >
                    {passwordShow ? "隠す" : "確認"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel marginTop="20px">ユーザー名</FormLabel>
              <Input
                pr="4.5rem"
                placeholder="ヒュモ子"
                size="sm"
                width="auto"
                variant="filled"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel marginTop="20px">利用区分</FormLabel>
              <Stack
                spacing={[1, 5]}
                direction={["column", "row"]}
                marginTop="20px"
              >
                <Select
                  placeholder="区分を選択してください"
                  onChange={(e) => {
                    setUseOrganization(e.target.value);
                  }}
                >
                  <option value={"出演者"}>出演者</option>
                  <option value={"共演者"}>共演者</option>
                  <option value={"両方"}>両方</option>
                </Select>
              </Stack>
            </FormControl>
            <br />
            <Center>
              <Box marginLeft="3rem" display="contents">
                <Button
                  onClick={(e) => {
                    singUpHandler(e);
                  }}
                  isDisabled={
                    userEmail == "" ||
                    userName == "" ||
                    userPassword == "" ||
                    userPassword.length < 8 ||
                    useOrganization == ""
                  }
                >
                  登録
                </Button>
                <br />
              </Box>
            </Center>
            <Center>
              <Box
                marginLeft="3rem"
                display="contents"
                marginTop="10px"
                fontSize="1xs"
              >
                <Link href="/signin">ログインはこちら</Link>
              </Box>
            </Center>
          </Box>
        </Box>
      </Box>
    </AuthGuard>
  );
};

export default Signup;
