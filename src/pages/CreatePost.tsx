import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CreatePost = () => {
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <form className="formInputs">
          <div className="inputContainer">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" placeholder="Title ..." />
          </div>
          <div className="inputContainer">
            <label htmlFor="content">Content</label>
            <textarea id="content" placeholder="type your post here" />
          </div>
          <button className="submitPost" type="submit">
            <FontAwesomeIcon icon={faCirclePlus} style={{marginRight: "20px"}} />
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
