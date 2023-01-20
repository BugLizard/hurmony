import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  Text,
  Textarea,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

const ProfileEdit = () => {
  return (
    <Box>
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
            <Button>UpLoad</Button>
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
              <Input
                marginTop="1rem"
                pr="5rem"
                placeholder="ピアノ太郎"
                size="lg"
                width="auto"
                variant="filled"
                mb="25px"
              />
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
              <Input
                marginTop="1rem"
                pr="5rem"
                placeholder="ピアノ太郎楽団"
                size="lg"
                width="auto"
                variant="filled"
                mb="25px"
              />
            </Center>
            <hr />
          </Container>
          <Container>
            <Center>
              <Heading as="h2" size="lg" color="white" marginTop="20px">
                プロフィール詳細
              </Heading>
            </Center>
            <Center>
              <Textarea
                marginTop="15px"
                marginBottom="10px"
                boxSize="xl"
                bg="white"
                placeholder="プロフィールを入力"
              />
            </Center>
          </Container>
          <Container marginTop="25px">
            <Center
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              marginBottom="20px"
            >
              <Button width="100px">編集</Button>
              <Button width="100px">戻る</Button>
            </Center>
          </Container>
        </Box>
      </Center>
    </Box>
  );
};

export default ProfileEdit;
