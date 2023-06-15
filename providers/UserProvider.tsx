"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UserProvider: FC<Props> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
