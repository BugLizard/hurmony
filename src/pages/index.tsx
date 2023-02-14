import { Box, Button, Center, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import Link from "next/link";

import React from "react";
import logo from "../img/HurmonyTrans.png";
import { AuthGuard } from "../lib/auth/component/AuthGuard/AuthGuard";
//完成後余裕があったら動きをつける

const Top = () => {
  return (
    <AuthGuard>
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
        <Link href="/signin">
          <Button>ログイン</Button>
        </Link>
        <Link href="/signup">
          <Button>新規登録</Button>
        </Link>
      </Center>
    </AuthGuard>
  );
};

export default Top;
