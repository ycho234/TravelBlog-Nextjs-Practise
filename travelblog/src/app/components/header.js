import Link from "next/link"
import logo from "./image.png"

export default function Header() {
  return (
  <nav className="header">
  <img src={logo} alt="Logo image"></img>
  <h1>My Travel Blog</h1>
  <Link className="addPostButton" href="./AddPost">Add Post</Link>
  </nav>
  )
}
