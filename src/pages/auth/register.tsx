import React from 'react'
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>
        Sudah punya akun ? <Link href={"/auth/login"}>login di sini</Link>
      </p>
    </div>
  );
}

export default RegisterPage
