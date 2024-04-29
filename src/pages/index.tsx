import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/layouts/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello, Its Me</h1>
    </div>
  );
}
