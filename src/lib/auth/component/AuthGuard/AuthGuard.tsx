import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { useAuthContext, User } from "../../provider/AuthProvider";

type Props = {
  children: ((user: User) => ReactNode) | ReactNode;
};

export const AuthGuard = ({ children }: Props) => {
  const user = useAuthContext();
  const router = useRouter();

  if (typeof user === "undefined") {
    return <Box>読み込み中...</Box>;
  }
  if (user === null && router.pathname !== "/signin") {
    router.push("/signin");
    return null;
  }
  if (
    (user !== null && router.pathname === "/signin") ||
    router.pathname === "/signup" ||
    router.pathname === "/"
  ) {
    router.push("/mypage");
    return null;
  }

  return <>{children}</>;
};
