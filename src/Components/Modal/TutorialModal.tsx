import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";

const TutorialModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="twitter">
        チュートリアル
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily="Hannotate SC">チュートリアル</ModalHeader>
          <ModalCloseButton />
          {/* その内フォトショで一枚画像に作り直す */}
          <ModalBody fontWeight="bold" fontFamily="Hannotate SC">
            1.「マッチング開始」をクリック！
            <br />
            2.マッチング条件を選択しマッチング開始！
            <br />
            3.マッチング条件と近い人が表示されるよ！
            <br />
            4.条件に合う人を見つけたら♪ボタンを押そう！
            <br />
            5.相手も♪を返してくれたらマッチング成立！
            <br />
            <br />
            　　　　　連絡先が表示されるよ！
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="facebook" mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TutorialModal;
