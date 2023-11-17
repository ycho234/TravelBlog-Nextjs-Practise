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
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
