import React from 'react'
import Post from '../../components/Post'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './Posts.css'

import { Card } from 'antd'

const Posts = ({ data: { loading, posts }}) => {
  if (loading) {
    return <div>Loading...</div>
  } else {
    return (
      <Card className='posts'>
          <h3 className='postsTitle'>Posts</h3>
          <div className='postsList'>
            {posts.map(post => <Post key={post.id} post={post} />)}
          </div>
      </Card>
    )
  }
}

const PostQuery = gql`
  query postQuery {
    posts {
      id
      title
      votes
      author {
        id
        firstName
        lastName
      }
    }
  }
`

export default graphql(PostQuery)(Posts)
