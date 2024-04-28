import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.css";
import LoginViews from "@/views/Auth/Login/index";

const LoginPage = () => {
  return (
    <>
      <LoginViews />
    </>
  );
};

export default LoginPage;
