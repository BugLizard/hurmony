import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";

import dummyImage from "../img/piano_upright.png";
import Header from "../Components/Header/Header";

const MyPage = () => {
  return (
    <Box>
      <Header />

      <Center>
        <Box
          marginTop="3rem"
          boxSize="15rem"
          bg="Highlight"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          display="flex"
        >
          <WrapItem>
            <Avatar name="pianoMan" size="2xl" />
          </WrapItem>
        </Box>
      </Center>
      <Center>
        <Box
          boxSize="-webkit-max-content"
          bg="#78BBE6"
          marginTop="50px"
          borderRadius="1%"
        >
          <Container>
            <Center>
              <Heading as="h2" size="lg" color="white" marginTop="20px">
                ユーザー名
              </Heading>
            </Center>
            <Center>
              <Text
                color="white"
                marginTop="10px"
                marginBottom="10px"
                fontSize="2xl"
              >
                ピアノ太郎
              </Text>
            </Center>
            <hr />
          </Container>
          <Container>
            <Center>
              <Heading as="h2" size="lg" color="white" marginTop="20px">
                団体名
              </Heading>
            </Center>
            <Center>
              <Text
                color="white"
                marginTop="10px"
                marginBottom="10px"
                fontSize="2xl"
              >
                Dummyフィルハーモニー
              </Text>
            </Center>
            <hr />
          </Container>
          <Container>
            <Center>
              <Heading
                as="h2"
                size="lg"
                color="white"
                marginTop="20px"
                marginBottom="20px"
              >
                マッチング件数 : 3件
              </Heading>
            </Center>
          </Container>
          <Container marginTop="25px" marginBottom="25px">
            <Center>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/KAIjlRl5Al4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Center>
          </Container>
          <Container>
            <Center>
              <Heading as="h2" size="lg" color="white" marginTop="20px">
                プロフィール詳細
              </Heading>
            </Center>
            <Center>
              <Text
                color="white"
                marginTop="10px"
                marginBottom="10px"
                fontSize="2xl"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
                reiciendis illo. Quasi ullam saepe quo corporis iusto maxime,
                inventore error ducimus reprehenderit aliquam consequuntur
                beatae reiciendis, quibusdam nobis mollitia perferendis! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Fugit ab
                nostrum molestiae est incidunt perferendis quasi dolorem, facere
                corrupti sequi cupiditate tempora vel obcaecati optio esse ut
                ipsum exercitationem. Est.
              </Text>
            </Center>
            <hr />
          </Container>
        </Box>
      </Center>
    </Box>
  );
};

export default MyPage;
