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
    console.log(data);
  }

  return (
    <div className="mainSecondary">
      <label for="title" className="label">
        Title <input onChange={handleTitle} type="text" className="typing" />
      </label>
      <label for="description" className="label">
        Description{" "}
        <input onChange={handleDescription} type="text" className="typing" />
      </label>
      <label for="image" className="label">
        Image URL{" "}
        <input onChange={handleImage} type="text" className="typing" />
      </label>
      <button onClick={newBlog} type="submit" className="submitButton">
        Submit
      </button>
    </div>
  );
}

// track the input in the input field using state

// nested function that tracks the string info put into the input field

// function to handle the submit button (onClick)

//
