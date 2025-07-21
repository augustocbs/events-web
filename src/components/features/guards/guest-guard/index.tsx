"use client"
import { useRouter } from "next/router";
import { ReactNode, ReactElement } from "react";

import { useAuthentication } from "@/_libs";

interface Props {
  children: ReactNode;
  fallback: ReactElement | null;
}

export function GuestGuard({ children, fallback }: Props) {
  const { query } = useRouter();

  const redirectIfAuthenticated = query?.returnUrl
    ? (query.returnUrl as string)
    : "/entrar";

  const { user, isFetchingUser } = useAuthentication({
    middleware: "guest",
    redirectIfAuthenticated,
  });

  if (isFetchingUser || user) {
    return fallback;
  }

  return <>{children}</>;
}
