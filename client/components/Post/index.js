import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import './Post.css'

import { Button, Card } from 'antd'

const Post = ({ mutate, post }) => (
  <Card>
    <section className='post'>
      <div className='postVotesContainer'>
        <Button
          shape="circle"
          icon="caret-up"
          className='postVotes'
          onClick={() => mutate({ variables: { postId: post.id } })}
          />
        <div>{post.votes}</div>
      </div>
      <div className='postContentContainer'>
        <div className='postAuthor'>{post.author.firstName}</div>
        <div className='postTitle'>{post.title}</div>
      </div>
    </section>
  </Card>
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
