import { DeleteIcon } from "@chakra-ui/icons";
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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import React from "react";

const MatchingTargetModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="linkedin">
        マッチング件数 : 3件
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>コンタクトを取ってください</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table variant="simple">
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>名前</Th>
                    <Th>メールアドレス</Th>
                    <Th>削除</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>ピアノ子</Td>
                    <Td>piano@kkk.jp</Td>
                    <Td>
                      <DeleteIcon />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>sample子</Td>
                    <Td>sample子@kkk.jp</Td>
                    <Td>
                      <DeleteIcon />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MatchingTargetModal;
