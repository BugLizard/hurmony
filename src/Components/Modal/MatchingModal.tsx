import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const MatchingModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        size="lg"
        height="100px"
        width="300px"
        colorScheme="facebook"
      >
        マッチング開始
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>マッチング条件設定</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="md">パート</Heading>
            <hr />
            <Checkbox value="声楽">声楽</Checkbox>
            <Checkbox value="楽器">楽器</Checkbox>
            <Checkbox value="伴奏">伴奏</Checkbox>
            <Heading size="md" marginTop="25px">
              所在地
            </Heading>
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
            <Heading size="md" marginTop="25px">
              ギャラ
            </Heading>
            <hr />
            <Checkbox value="ギャラあり">あり</Checkbox>
            <Checkbox value="ギャラなし">なし</Checkbox>
            <Heading size="md" marginTop="25px">
              オーディション
            </Heading>
            <hr />
            <Checkbox value="オーディションあり">あり</Checkbox>
            <Checkbox value="オーディションなし">なし</Checkbox>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              決定
            </Button>
            <Button colorScheme="facebook" mr={3} onClick={onClose}>
              戻る
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MatchingModal;
