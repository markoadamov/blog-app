import React from "react";
import PostCardDetails from "./PostCardDetails";
import postsService from "../services/PostsService";

export default function PostsList({ posts, setPosts }) {
  const handleDeletePost = async (id) => {
    let postsUpdate = [];

    function updateFrontEnd(result) {
      if (result) {
        postsUpdate = posts.filter((post) => post.id !== id);
        setPosts(postsUpdate);
      }
    }

    let result = await postsService.delete(id);
    updateFrontEnd(result);
  };

  return (
    <div className="row mb-2 postCardsHolder">
      {posts.map((post) => (
        <PostCardDetails
          key={post.id}
          post={post}
          handleDeletePost={handleDeletePost}
        />
      ))}
    </div>
  );
}
