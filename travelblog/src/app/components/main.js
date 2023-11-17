import travelBlog from "@/data";
import { useState } from "react";
const travel = travelBlog.map((data) => {
  return (
    <div className="elements">
      <h1 className="title">{data.title}</h1>
      <img src={data.image}></img>
      <p className="description">{data.description}</p>
    </div>
  );
});

export default function Main() {
  return (
    <div className="mainContainer">
      <main className="main">{travel}</main>
    </div>
  );
}
