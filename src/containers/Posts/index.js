import React from 'react'
import Post from '../../components/Post'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './Posts.css'

const Posts = ({ data: { loading, posts }}) => {
  if (loading) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='posts'>
        <h3 className='postsTitle'>Posts</h3>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    )
  }
}

const PostQuery = gql`
  query postQuery {
    posts {
      id
      title
      votes
    }
  }
`

export default graphql(PostQuery)(Posts)
