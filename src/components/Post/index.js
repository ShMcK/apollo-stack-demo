import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import './Post.css'

const Post = ({ mutate, post }) => (
  <div className='post'>
    <div className='postVotesContainer'>
      <button
        className='postVotes'
        onClick={() => mutate({ variables: { postId: post.id }})}
      >{post.votes}</button>
    </div>
    <div className='postContentContainer'>
      <span className='postTitle'>{post.title}</span>
    </div>
  </div>
)

const Mutation = graphql(gql`
  mutation upvotePost($postId: Int!) {
    upvotePost(postId: $postId) {
      id
      votes
    }
  }
`)

export default Mutation(Post)
