import React, { useState } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    try {
      await addDoc(postCollectionRef, {
        title,
        content,
        author: {
          name: auth.currentUser?.displayName,
          id: auth.currentUser?.uid,
        },
      });
      navigate("/");
      console.log("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="formInputs" onSubmit={createPost}>
          <div className="inputContainer">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Title ..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              placeholder="type your post here"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
          <button className="submitPost" type="submit" onClick={createPost}>
            <FontAwesomeIcon
              icon={faCirclePlus}
              style={{ marginRight: "20px" }}
            />
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
