import React from 'react'
import './Post.css'

const Post = ({ post }) => (
  <div className='post'>
    <div className='postVotesContainer'>
      <button className='postVotes'>{post.votes}</button>
    </div>
    <div className='postContentContainer'>
      <span className='postTitle'>{post.title}</span>
    </div>
  </div>
)

export default Post
