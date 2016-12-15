import { pubsub } from './subscriptions'

// TODO: replace with db
import posts from './Post/data'
import authors from './Author/data'

const resolveFunctions = {
  Query: {
    posts: () => posts,
  },
  Mutation: {
    upvotePost: (_, { postId }) => {
      const post = posts.find(p => p.id === postId)
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`)
      }
      post.votes += 1
      pubsub.publish('postUpvoted', post)
      return post
    },
  },
  Subscription: {
    postUpvoted: (post) => post,
  },
  Author: {
    posts: (author) => posts.filter(p => p.authorId === author.id)
  },
  Post: {
    author: (post) => authors.find(a => a.id === post.authorId)
  }
}

export default resolveFunctions
