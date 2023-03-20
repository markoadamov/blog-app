import React, {useState, useEffect} from 'react'
import postsService from '../services/PostsService'
import { useParams } from 'react-router-dom'
import AddComment from '../components/AddComment';
import CommentsList from '../components/CommentsList';
import { useFormattedDate } from '../custom_hooks/useFormattedDate';

export default function SinglePost() {

  const defaultPostState = {
    comments: [],
    title: "",
    text: ""
  }

  const { id } = useParams();
  const [post, setPost] = useState(defaultPostState);
  const [comments, setComments] = useState(defaultPostState);
  const date = useFormattedDate(post.createdAt,'MM/dd/yyyy');

  useEffect(()=>{
    handleGetPost();
  },[]);

  const handleGetPost = async () => {
    const postPromise = await postsService.get(id);
    console.log(postPromise);
    setPost(postPromise.data);
    setComments(postPromise.data.comments);
  };

  return (
    <div className="defaultDivPadding">
      <h1>{post.title} -ID: {post.id}</h1>
      <p>Created At: {date}</p>
      <p>{post.text}</p>
      <AddComment postID={post.id} comments={comments} setComments={setComments}/>
      <div className="AllCommentsDiv">
      <CommentsList comments={comments} />
      </div>
    </div>
  )
}
