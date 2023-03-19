import React, { useState, useEffect } from "react";
import postsService from "../services/PostsService";
import { useHistory, useParams, useLocation } from "react-router-dom";

export default function FormAddPost() {
  const formDefaultState = {
    title: "",
    text: "",
  };

  const location = useLocation();
  const { id } = useParams();
  const [newPost, setNewPost] = useState(formDefaultState);

  let history = useHistory();

  useEffect(() => {
    if (id) {
      handleGetPost();
    } else {
      setNewPost(formDefaultState);
    }
  }, [location]);

  const handleGetPost = async () => {
    const response = await postsService.get(id);
    setNewPost(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? handleEditPost() : handleAddPost();
  };

  const handleAddPost = async () => {
    await postsService.add(newPost);
    history.push("/posts");
  };

  const handleEditPost = async () => {
    await postsService.edit(id, newPost);
    history.push("/posts");
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
            minLength="2"
            required
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
            maxLength="300"
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleResetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}
