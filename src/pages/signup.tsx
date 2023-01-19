import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import React, { useState } from "react";

import logo from "../img/Hurmony.png";

const Signup = () => {
  const [passwordShow, setPassWordShow] = useState(false);
  const handlePasswordClick = () => setPassWordShow(!passwordShow);
  return (
    <Box display="flex">
      <Box mb="25px" display="flex" justifyContent="left">
        <NextImage
          src={logo}
          className="HurmonyLogo"
          alt="HurmonyLogo"
          height="600"
          width="600"
        />
      </Box>
      <Box mb="25px" display="flex" justifyContent="right">
        <FormControl>
          <Input
            pr="4.5rem"
            placeholder="ID(メールアドレス)"
            size="sm"
            width="auto"
            variant="flushed"
          />
          <InputGroup size="md">
            <Input
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
          <Button>ログイン</Button>
          <Button>Googleでログイン</Button>
          <Text>新規登録</Text>
          <Text>パスワードを忘れた方はこちら</Text>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Signup;
