import Link from "next/link";

export default function HeaderAdd() {
  return (
    <nav className="header">
      {/* <img src={image} alt="Logo image"></img> */}
      <h1>My Travel Blog</h1>
      <Link className="addPostButton" href="/">
        Home
      </Link>
    </nav>
  );
}
