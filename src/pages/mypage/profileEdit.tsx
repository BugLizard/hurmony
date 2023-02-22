import { db, storage } from "@/src/lib/firebase/firebase";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { validateImage } from "image-validator";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ProfileEdit = () => {
  //フォーム用
  const [userName, setUserName] = useState("");
  const [OrganizationName, setOrganizationName] = useState("");
  const [ProfileDetail, setProfileDetail] = useState("");

  //画像アップロード用
  const [image, setImage] = useState<File>(null!);
  //画像URL
  const [createObjectURL, setCreateObjectURL] = useState("");

  const router = useRouter();

  // 画像のバリデーション
  const validateFile = async (file: File) => {
    // 3GBを最大のファイルサイズに設定
    const limitFileSize = 800 * 1024;
    if (file.size > limitFileSize) {
      alert("ファイルサイズが大きすぎます。\n800kb以下にしてください。");
      return false;
    }
    const isValidImage = await validateImage(file);
    if (!isValidImage) {
      alert("画像ファイル以外はアップロードできません。");
      return false;
    }
    return true;
  };

  const uploadToClient = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      //800kb以下はエラー
      if (!(await validateFile(file))) return;
      setImage(file);
      setCreateObjectURL(URL.createObjectURL(file));
    }
  };

  const updateProfile = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newProfile = {
      name: userName,
      organization: OrganizationName,
      profileDetail: ProfileDetail,
    };
    //アバターアップロード処理
    const storageRef = ref(storage, `image/${image.name}`);
    await uploadBytes(storageRef, image)
      .then((snapshot) => {
        console.log("画像アップロード成功");
      })
      .catch((error) => {
        console.log("画像アップロード失敗");
      });

    const docRef = doc(db, "users");
    await setDoc(docRef, newProfile);
    router.push("/mypage");
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
              <Button
                width="100px"
                onClick={(e) => {
                  updateProfile(e);
                }}
              >
                編集
              </Button>
              <Link href="/mypage">
                <Button width="100px">戻る</Button>
              </Link>
            </Center>
          </Container>
        </Box>
      </Center>
    </Box>
  );
};

export default ProfileEdit;
