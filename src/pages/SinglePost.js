import React, {useState, useEffect} from 'react'
import postsService from '../services/PostsService'
import { useParams } from 'react-router-dom'

export default function SinglePost() {

  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(()=>{
    handleGetPost();
  },[]);

  const handleGetPost = async () => {
    const postPromise = await postsService.get(id);
    setPost(postPromise.data);
    console.log(postPromise);
  };

  return (
    <div className="defaultDivPadding">
      <h1>{post.title} -ID: {post.id}</h1>
      <p>{post.text}</p>
    </div>
  )
}
