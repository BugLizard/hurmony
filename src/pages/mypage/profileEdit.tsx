import { db } from "@/src/lib/firebase/firebase";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Input,
  Textarea,
  WrapItem,
} from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";

const ProfileEdit = () => {
  //フォーム用
  const [userName, setUserName] = useState("");
  const [OrganizationName, setOrganizationName] = useState("");
  const [ProfileDetail, setProfileDetail] = useState("");

  //画像アップロード用
  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState("");

  const uploadToClient = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      setImage(file);
      setCreateObjectURL(URL.createObjectURL(file));
    }
  };

  const updateProfile = async () => {
    const newProfile = {
      name: userName,
      organization: OrganizationName,
      profileDetail: ProfileDetail,
    };
    const docRef = doc(db, "users");
    await setDoc(docRef, newProfile);
  };

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
          <Image src={createObjectURL} />
        </Box>
      </Center>
      <Center>
        <Box
          marginTop="1rem"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          display="flex"
        >
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => uploadToClient(e)}
          />
        </Box>
      </Center>
      <Center>
        <Box
          boxSize="-webkit-max-content"
          bg="#78BBE6"
          borderRadius="1%"
          marginTop="1rem"
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
                onChange={(e) => setUserName(e.target.value)}
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
                onChange={(e) => setOrganizationName(e.target.value)}
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
                onChange={(e) => setProfileDetail(e.target.value)}
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
