import { useUser } from "@/src/lib/auth/component/getAuth/useUser";
import { db, storage } from "@/src/lib/firebase/firebase";
import { postImage } from "@/src/lib/profileEdit/upload";
import { userDbState } from "@/src/lib/store/Atom";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const ProfileEdit = () => {
  //フォーム用
  const [userName, setUserName] = useState("");
  const [OrganizationName, setOrganizationName] = useState("");
  const [ProfileDetail, setProfileDetail] = useState("");
  const [prefecture, setPrefecture] = useState("");

  //画像アップロード用
  const [image, setImage] = useState<File>(null!);
  //画像URL
  const [createObjectURL, setCreateObjectURL] = useState("");

  //プロフィールデータ取得
  const [profile, setProfile] = useRecoilState(userDbState);
  const user = useUser();

  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const uploadToClient = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      setImage(file);
      setCreateObjectURL(URL.createObjectURL(file));
    }
  };

  const updateProfile = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    //アバターアップロード処理
    const result = await postImage(image);
    console.log(result);
    const userRef = doc(db, "users");

    //名前
    if (userName !== "") {
      await updateDoc(userRef, {
        name: userName,
        updateAt: serverTimestamp(),
      });
    }
    //画像
    if (createObjectURL !== "") {
      await updateDoc(userRef, {
        photoURL: createObjectURL,
        updateAt: serverTimestamp(),
      });
    }
    //組織名
    if (OrganizationName !== "") {
      await updateDoc(userRef, {
        organization: OrganizationName,
        updateAt: serverTimestamp(),
      });
    }
    //都道府県
    if (prefecture !== "") {
      await updateDoc(userRef, {
        prefecture: prefecture,
        updateAt: serverTimestamp(),
      });
    }

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
                placeholder={profile.name}
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
                placeholder={profile.organization}
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
                都道府県
              </Heading>
            </Center>
            <Center>
              <Button
                onClick={onOpen}
                marginTop="1rem"
                pr="2rem"
                size="lg"
                width="auto"
                mb="25px"
              >
                Click！
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>都道府県</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <hr />
                    <Checkbox value="北海道">北海道</Checkbox>
                    <Checkbox value="青森県">青森県</Checkbox>
                    <Checkbox value="岩手県">岩手県</Checkbox>
                    <Checkbox value="宮城県">宮城県</Checkbox>
                    <Checkbox value="秋田県">秋田県</Checkbox>
                    <Checkbox value="山形県">山形県</Checkbox>
                    <Checkbox value="福島県">福島県</Checkbox>
                    <Checkbox value="茨城県">茨城県</Checkbox>
                    <Checkbox value="栃木県">栃木県</Checkbox>
                    <Checkbox value="群馬県">群馬県</Checkbox>
                    <Checkbox value="埼玉県">埼玉県</Checkbox>
                    <Checkbox value="千葉県">千葉県</Checkbox>
                    <Checkbox value="東京都">東京都</Checkbox>
                    <Checkbox value="神奈川県">神奈川県</Checkbox>
                    <Checkbox value="新潟県">新潟県</Checkbox>
                    <Checkbox value="富山県">富山県</Checkbox>
                    <Checkbox value="石川県">石川県</Checkbox>
                    <Checkbox value="福井県">福井県</Checkbox>
                    <Checkbox value="山梨県">山梨県</Checkbox>
                    <Checkbox value="長野県">長野県</Checkbox>
                    <Checkbox value="岐阜県">岐阜県</Checkbox>
                    <Checkbox value="静岡県">静岡県</Checkbox>
                    <Checkbox value="愛知県">愛知県</Checkbox>
                    <Checkbox value="三重県">三重県</Checkbox>
                    <Checkbox value="滋賀県">滋賀県</Checkbox>
                    <Checkbox value="京都府">京都府</Checkbox>
                    <Checkbox value="大阪府">大阪府</Checkbox>
                    <Checkbox value="兵庫県">兵庫県</Checkbox>
                    <Checkbox value="奈良県">奈良県</Checkbox>
                    <Checkbox value="和歌山県">和歌山県</Checkbox>
                    <Checkbox value="鳥取県">鳥取県</Checkbox>
                    <Checkbox value="島根県">島根県</Checkbox>
                    <Checkbox value="岡山県">岡山県</Checkbox>
                    <Checkbox value="広島県">広島県</Checkbox>
                    <Checkbox value="山口県">山口県</Checkbox>
                    <Checkbox value="徳島県">徳島県</Checkbox>
                    <Checkbox value="香川県">香川県</Checkbox>
                    <Checkbox value="愛媛県">愛媛県</Checkbox>
                    <Checkbox value="高知県">高知県</Checkbox>
                    <Checkbox value="福岡県">福岡県</Checkbox>
                    <Checkbox value="佐賀県">佐賀県</Checkbox>
                    <Checkbox value="長崎県">長崎県</Checkbox>
                    <Checkbox value="熊本県">熊本県</Checkbox>
                    <Checkbox value="大分県">大分県</Checkbox>
                    <Checkbox value="宮崎県">宮崎県</Checkbox>
                    <Checkbox value="鹿児島県">鹿児島県</Checkbox>
                    <Checkbox value="沖縄県">沖縄県</Checkbox>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      type="submit"
                      colorScheme="green"
                      mr={3}
                      onClick={(e) => {
                        onClose;
                        setPrefecture(
                          (e.currentTarget as HTMLButtonElement).value
                        );
                      }}
                    >
                      決定
                    </Button>
                    <Button colorScheme="facebook" mr={3} onClick={onClose}>
                      キャンセル
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
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
                placeholder={profile.profileDetail}
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
