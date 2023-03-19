import React, { useState } from "react";
import postsService from "../services/PostsService";
import { useHistory } from "react-router-dom";

export default function FormAddPost() {
  const formDefaultState = {
    title: "",
    text: "",
  };

  const [newPost, setNewPost] = useState(formDefaultState);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddPost = () => {
    postsService.add(newPost, () => {
      history.push("/posts");
    });
  };

  const handleResetForm = () => {
    setNewPost(formDefaultState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add Post:</h1>
          <br />
          <input
            placeholder="Post Title"
            type="text"
            value={newPost.title}
            onChange={(e) => {
              setNewPost({ ...newPost, title: e.target.value });
            }}
          />
          <br />
          <br />
          <textarea
            placeholder="Post Body"
            type="text"
            value={newPost.text}
            onChange={(e) => {
              setNewPost({ ...newPost, text: e.target.value });
            }}
            className="textArea"
          />
        </div>
        <button onClick={handleAddPost}>Submit</button>
        <button onClick={handleResetForm}>Reset</button>
      </form>
    </div>
  );
}
