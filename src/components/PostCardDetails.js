import React from "react";
import { useHistory } from "react-router-dom";

export default function PostCardDetails({ post }) {

  let history = useHistory();

  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">{post.title}</h3>
          <div className="mb-1 text-muted">{post.createdAt}</div>
          <p className="card-text mb-auto">{post.text}</p>
          <div className="ViewAndEdit">
          <a href={`/post/${post.id}`}>
            View Post
          </a>
          <button onClick={() => history.push(`/edit/${post.id}`)}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
