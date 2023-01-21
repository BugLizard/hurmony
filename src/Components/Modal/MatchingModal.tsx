import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const MODALS = {
  Tutorial: "tutorial",
  Setting: "setting",
};
//TODO:チュートリアルモーダル→チェックモーダルへ遷移
const MatchingModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalName, setModalName] = useState(null);

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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button>次へ</Button>
          </ModalFooter>
          {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MatchingModal;
