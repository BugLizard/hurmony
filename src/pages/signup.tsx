import {
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import NextImage from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

import logo from "../img/HurmonyTrans.png";
import { auth, db } from "../lib/firebase/firebase";

//Todo:一通り作ったらflex対応

interface DivCheck {
  name: string;
  checked: boolean;
}

const Signup = () => {
  //パスワード表示フラグ
  const [passwordShow, setPassWordShow] = useState(false);

  //フォーム
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  //チェックボックス群
  const [DivCheck, setDivCheck] = useState<DivCheck[]>([
    {
      name: "出演者",
      checked: false,
    },
    {
      name: "主催者",
      checked: false,
    },
  ]);
  const [checkFlag, setCheckFlag] = useState(false);

  //パスワード表示切り替え
  const handlePasswordClick = () => setPassWordShow(!passwordShow);

  const router = useRouter();

  const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDivChecks = [...DivCheck];
    newDivChecks.map((check) => {
      if (check.name === e.target.value) {
        check.checked = !check.checked;
      }
      return newDivChecks;
    });
    setDivCheck(newDivChecks);
    setCheckFlag(!checkFlag);
  };

  //会員登録処理
  const singUpHandler = async () => {
    const usersCollectionRef = collection(db, "users");

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const ErrorMessage = error.message;
        alert(
          "エラー：" +
            "エラーコード<" +
            errorCode +
            ">エラーメッセージ<" +
            ErrorMessage +
            ">"
        );
      });

    await addDoc(usersCollectionRef, {
      name: userName,
      mail: userEmail,
      password: userPassword,
    });
    router.push("/mypage");
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
          <FormControl isRequired>
            <Heading marginTop="5rem" fontSize="2xl">
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
            <FormLabel marginTop="20px">利用区分(2つ選択可)</FormLabel>
            {DivCheck.map((check) => {
              return (
                <CheckboxGroup key={check.name}>
                  <Stack
                    spacing={[1, 5]}
                    direction={["column", "row"]}
                    marginTop="20px"
                  >
                    <Checkbox
                      id={check.name}
                      value={check.name}
                      onChange={checkBoxHandler}
                    >
                      {check.name}
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
              );
            })}
          </FormControl>

          <br />
          <Center>
            <Box marginLeft="3rem" display="contents">
              <Button
                marginTop="10px"
                onClick={singUpHandler}
                disabled={
                  userEmail == "" ||
                  userName == "" ||
                  userPassword == "" ||
                  checkFlag == true
                }
              >
                登録
              </Button>
              <br />
            </Box>
          </Center>
          <Center>
            <Box marginLeft="3rem" display="contents">
              <Text marginTop="10px" fontSize="1xs">
                ログインはこちら
              </Text>
            </Box>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
