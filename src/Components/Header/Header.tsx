import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box px="4" bgColor="#1B435D">
      <Container maxW="container.lg">
        <Flex
          as="header"
          py="4"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading as="h1" fontSize="2xl" cursor="pointer" color="white">
            Matching
          </Heading>
          <Heading as="h1" fontSize="2xl" cursor="pointer" color="white">
            Tutorial
          </Heading>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
