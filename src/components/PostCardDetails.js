import React from "react";

export default function PostCardDetails({ post }) {
  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">{post.title}</h3>
          <div className="mb-1 text-muted">{post.createdAt}</div>
          <p className="card-text mb-auto">{post.text}</p>
          <a href="#" className="stretched-link">
            Continue reading
          </a>
        </div>
      </div>
    </div>
  );
}
