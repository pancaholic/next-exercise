import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const { push, query } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className='text-3xl font-bold'>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p style={{ color: "red" }}>
        Belum punya akun ? <Link style={{ color: "blue" }} href={"/auth/register"}>register di sini</Link>
      </p>
    </div>
  );
}

export default LoginViews