import React, { useState } from "react";
import postsService from "../services/PostsService";

export default function AddComment({ postID, comments, setComments }) {
  let formDefaultState = {
    text: "",
  };

  const [newComment, setNewComment] = useState(formDefaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddComment();
  };

  const handleAddComment = async () => {
    let response = await postsService.addComment(newComment, postID);
    let CommentsUpdate = [];

    if (response) {
      CommentsUpdate = [...comments, response.data];
      setComments(CommentsUpdate);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <br />
          <br />
          <h3>Add Comment:</h3>
          <br />
          <textarea
            placeholder="Comment Body"
            type="text"
            value={newComment.text}
            onChange={(e) => {
              setNewComment({ ...newComment, text: e.target.value });
            }}
            className="AddCommentTextArea"
            required
          />
        </div>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}
