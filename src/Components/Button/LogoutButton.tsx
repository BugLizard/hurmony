import { auth } from "@/src/lib/firebase/firebase";
import { Box, Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";

const LogoutButton = () => {
  const router = useRouter();

  const logout = async () => {
    await signOut(auth);
    router.push("/signin");
  };

  return (
    <Box>
      <Button onClick={logout}>Logout</Button>
    </Box>
  );
};

export default LogoutButton;
