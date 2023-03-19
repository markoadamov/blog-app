import React, { useState, useEffect } from "react";
import PostsList from "../components/PostsList";
import postsService from "../services/PostsService";

export default function AppPosts() {
  const [posts, setPosts] = useState([]);

  //const [posts, setPosts] = useState([{id:1, title: "1Neki Naslov", text: "1Neki Tekst Neki Tekst Neki Tekst Neki Tekst Neki Tekst Neki Tekst Neki Tekst Neki Tekst "}, {id:2, title: "2Neki Naslov", text: "2Neki Tekst Neki Tekst Neki Tekst Neki Tekst Neki Tekst Neki Tekst Neki Tekst Neki Tekst "}]);

  useEffect(() => {
    handleGetPosts();
  }, []);

  const handleGetPosts = async () => {
    const response = await postsService.getAll();
    setPosts(response.data);
  };

  return (
    <div>
      <PostsList posts={posts} setPosts={setPosts}/>
    </div>
  );
}
