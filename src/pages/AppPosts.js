import React, { useState, useEffect } from "react";
import PostsList from "../components/PostsList";
import postsService from "../services/PostsService";

export default function AppPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    handleGetPosts();
  }, []);

  const handleGetPosts = async () => {
    const response = await postsService.getAll();
    setPosts(response.data);
  };

  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
}
