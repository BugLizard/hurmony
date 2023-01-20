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
import NextImage from "next/image";
import React, { useState } from "react";

import logo from "../img/HurmonyTrans.png";

//Todo:一通り作ったらflex対応

const Signin = () => {
  const [passwordShow, setPassWordShow] = useState(false);
  const handlePasswordClick = () => setPassWordShow(!passwordShow);
  return (
    <Box display="flex" justifyContent="space-between" marginTop="100px">
      <Box boxSize="xl" bg="">
        <Box
          boxSize="-webkit-fit-content"
          mb="25px"
          display="flex"
          justifyContent="left"
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
      <Box boxSize="xl" bg="#D5EEFF" borderRadius="5%" marginRight="1rem">
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
              variant="flushed"
            />
            <InputGroup size="md">
              <Input
                marginTop="10px"
                pr="4.5rem"
                placeholder="PASSWORD"
                type={passwordShow ? "text" : "password"}
                size="sm"
                width="auto"
                variant="flushed"
              />
              <InputRightElement>
                <Button size="sm" onClick={handlePasswordClick}>
                  {passwordShow ? "隠す" : "確認"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <br />
            <Box marginLeft="3rem" display="contents">
              <Button>ログイン</Button>
              <br />
              <Button marginTop="10px" marginRight="10px">
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
