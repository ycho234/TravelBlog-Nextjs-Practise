"use client";
import { useState } from "react";
import travelBlog from "@/data";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState("");
  const [data, setData] = useState(travelBlog);

  function handleTitle(e) {
    setNewTitle(e.target.value);
  }

  function handleDescription(e) {
    setNewDescription(e.target.value);
  }

  function handleImage(e) {
    setNewImage(e.target.value);
  }

  function newBlog() {
      const newData = {
      id: uuidv4(),
      title: newTitle,
      image: newImage,
      description: newDescription,
    };

    setData([...data, newData]);
    console.log(data)
  }

  return (
    <div className="main">
      <label for="title">
        Title <input onChange={handleTitle} type="text" />
      </label>
      <label for="description">
        Description <input onChange={handleDescription} type="text" />
      </label>
      <label for="image">
        Image URL
        <input onChange={handleImage} type="text" />
      </label>
      <button onClick={newBlog} type="submit">Submit</button>
    </div>
  );
}

// track the input in the input field using state

// nested function that tracks the string info put into the input field

// function to handle the submit button (onClick)

//
