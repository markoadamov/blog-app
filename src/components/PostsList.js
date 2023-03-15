import React from "react";
import PostCardDetails from "./PostCardDetails";

export default function PostsList({ posts }) {
  return (
    <div className="row mb-2 postCardsHolder">
      {posts.map((post) => (
        <PostCardDetails key={post.id} post={post} />
      ))}
    </div>
  );
}
