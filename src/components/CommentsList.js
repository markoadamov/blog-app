import React, { useEffect } from "react";
import SingleComment from "./SingleComment";

export default function CommentsList({ comments }) {

  return (
    <div>
      {(comments && comments.length > 0) ? (
        comments.map((comment) => (
          <SingleComment key={comment.id} comment={comment} />
        ))
      ) : (
        <p>No Comments</p>
      )}
    </div>
  );
}
