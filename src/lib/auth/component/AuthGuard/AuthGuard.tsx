import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { useAuthContext } from "../../provider/AuthProvider";

type Props = {
  children: ReactNode;
};

export const AuthGuard = ({ children }: Props) => {
  const { user } = useAuthContext();
  const { push } = useRouter();
  const { pathname } = useRouter();

  if (typeof user === "undefined") {
    return <Box>読み込み中...</Box>;
  }
  if (user === null && pathname !== "/signin") {
    push("/signin");
    return null;
  }
  if (
    (user !== null && pathname === "/signin") ||
    pathname === "/signup" ||
    pathname === "/"
  ) {
    push("/mypage");
    return null;
  }

  return <>{children}</>;
};
