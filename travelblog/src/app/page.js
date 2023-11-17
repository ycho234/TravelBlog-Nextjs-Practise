import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import travel from "../app/datatest.json";

// import { useState } from "react";
// functionality:
// display the data.js file (travelBlog)
// can use a map function or for each function
// need a container for the Title, image and description
// for each item create the above

export default function Home() {
  // const [blog, setBlog] = useState([]);
  // const fetchTodos = () => {
  //   const response = fetch("../data");
  //   const data = response.json();
  //   console.log(data);
  //   setBlog(data);
  // };
  return (
    <>
      <h1> {travel.title}</h1>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
