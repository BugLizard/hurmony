import { Avatar, Box, Button, Center, Text } from "@chakra-ui/react";
import React from "react";

import NextImage from "next/image";
import musicalNote from "../img/sixteenth_note-1.svg";
import MatchingModal from "../Components/Modal/MatchingModal";
import TutorialModal from "../Components/Modal/TutorialModal";

//ハートだとこれみよがしすぎるので音符に変える

const Matching = () => {
  return (
    <Box>
      <Center marginTop="300px">
        <MatchingModal />
      </Center>
      <Center marginTop="20px">
        <TutorialModal />
      </Center>

      {/* スタートボタン押下、マッチングで下記コメントアウト画面へ */}
      {/* <Center>
        <Box justifyContent="space-between" display="flex" marginTop="300px">
          <Avatar name="pianoMan" size="2xl" marginRight="50px" />
          <Text cursor="pointer">
            <NextImage
              src={musicalNote}
              className="musicalNote"
              alt="音符"
              height="200"
              width="200"
            />
          </Text>
          <Avatar name="SopranoMan" size="2xl" marginLeft="60px" />
        </Box>
      </Center> */}
    </Box>
  );
};

export default Matching;
