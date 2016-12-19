import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import styles from './styles'

import { Button, Card } from 'antd'

const Post = ({ mutate, post }) => (
  <Card>
    <section style={styles.post}>
      <div style={styles.votesContainer}>
        <Button
          shape="circle"
          icon="caret-up"
          style={styles.votesButton}
          onClick={() => mutate({ variables: { postId: post.id } })}
          />
        <div>{post.votes}</div>
      </div>
      <div style={styles.contentContainer}>
        <div style={styles.author}>{post.author.firstName}</div>
        <div style={styles.title}>{post.title}</div>
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
