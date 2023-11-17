import Link from "next/link"
import * as image from "./image.png"

export default function Header() {
  return (
  <nav className="header">
  <img src={image} alt="Logo image"></img>
  <h1>My Travel Blog</h1>
  <Link className="addPostButton" href="./AddPost">Add Post</Link>
  </nav>
  )
}
