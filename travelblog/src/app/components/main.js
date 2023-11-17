"use client";

import travelBlog from "@/data";
import React, { useState } from "react";

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
  const [travelData, setTravelData] = useState(travel);

  
  return (
    <div className="mainContainer">
      <main className="main">{travelData}</main>
    </div>
  );
}
