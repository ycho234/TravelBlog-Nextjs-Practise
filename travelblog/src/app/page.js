import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import travelBlog  from "../data.js";
const data1 = travelBlog[0].title



// functionality:
// display the data.js file (travelBlog)
// can use a map function or for each function
// need a container for the Title, image and description
// for each item create the above

export default function Home() {
  console.log(data1)
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <h1>{data1}</h1>
    </>
  );
}
