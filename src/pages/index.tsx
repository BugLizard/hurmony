import { Box, Button, Center, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import React from "react";
import logo from "../img/HurmonyTrans.png";
//完成後余裕があったら動きをつける

const Top = () => {
  return (
    <Box>
      <Box mb="25px" display="flex" justifyContent="center">
        <NextImage
          src={logo}
          className="HurmonyLogo"
          alt="HurmonyLogo"
          height="700"
          width="700"
        />
      </Box>
      <Center>
        <Text>
          舞台と音楽家を繋げるマッチングサイト、Hurmony（ヒューモニー）
        </Text>
      </Center>
      <br />
      <Center>
        <Button>ログイン</Button>
        <Button>新規登録</Button>
      </Center>
    </Box>
  );
};

export default Top;
