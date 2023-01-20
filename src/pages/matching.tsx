import { Avatar, Box, Center } from "@chakra-ui/react";
import React from "react";

//ハートだとこれみよがしすぎるので音符に変える

const Matching = () => {
  return (
    <Box>
      <Center>
        <Box justifyContent="space-between" display="flex" marginTop="300px">
          <Avatar name="pianoMan" size="2xl" />
          <Avatar name="SopranoMan" size="2xl" />
        </Box>
      </Center>
    </Box>
  );
};

export default Matching;
