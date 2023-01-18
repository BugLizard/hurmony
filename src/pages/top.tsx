import { Box, Image, Text } from "@chakra-ui/react";

import React from "react";
import logo from "../img/HurmonyTrans.png";

const Top = () => {
  return (
    <Box boxSize="xl" background="#999">
      <Image style={logo} alt="HurmonyLogo" />
    </Box>
  );
};

export default Top;
