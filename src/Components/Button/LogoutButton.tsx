import { useAuthContext } from "@/src/lib/auth/provider/AuthProvider";
import { auth } from "@/src/lib/firebase/firebase";
import { Box, Button, useToast } from "@chakra-ui/react";
import { FirebaseError } from "firebase/app";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";

const LogoutButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const logout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      toast({
        title: "ログアウトしました",
        status: "success",
        position: "top",
      });
      router.push("/signin");
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Button onClick={logout} isLoading={isLoading}>
        Logout
      </Button>
    </Box>
  );
};

export default LogoutButton;
