import React from 'react'

export default function SingleComment({comment}) {
  return (
    <div className='CommentDiv'>
      <p>{comment.text}</p>
    </div>
  )
}
