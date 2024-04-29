import React from "react";
import Navbar from "../Navbar";
import { useRouter } from "next/router";
import path from "path";

type AppShellProps = {
  children: React.ReactNode;
};

const disablePaths = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  const shouldDisableNavbar = disablePaths.includes(pathname);

  return (
    <main>
      {!shouldDisableNavbar && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
