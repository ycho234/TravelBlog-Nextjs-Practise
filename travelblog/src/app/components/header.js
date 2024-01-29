import Link from "next/link";
import Image from "next/image";

// import * as image from "./image.png"

export default function Header() {
  return (
    <nav className="header">
      <h1>My Travel Blog 🧭</h1>
      <Link className="addPostButton" href="./AddPost">
        Add Post
      </Link>
    </nav>
  );
}
