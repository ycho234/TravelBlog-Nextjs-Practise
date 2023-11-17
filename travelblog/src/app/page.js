import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Link href="./AddPost">Click</Link>
    </>
  );
}
