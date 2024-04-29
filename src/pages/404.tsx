import React from "react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="bg-white min-h-screen items-center justify-center flex flex-col">
        <img src="/not_found.png" alt="404" className="w-1/3" />
      <div className="text-3xl text-center">
        Halaman Tidak Ditemukan <br />
        <Link href="/" className="text-blue-500 underline text-2xl">Kembali ke Beranda</Link>
      </div>
    </div>
  );
};

export default Custom404;
