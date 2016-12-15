import React from 'react'
import { connect } from 'react-redux'
import Post from '../../components/Post'

const Posts = (props) => (
  <div>
    {props.posts.map(post => <Post key={post.id} post={post} />)}
  </div>
)

const mapState = state => ({
  posts: [{ id: 1, title: 'Test Post' }],
})

export default connect(mapState)(Posts)