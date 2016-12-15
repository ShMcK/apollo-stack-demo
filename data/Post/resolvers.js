import { pubsub } from '../subscriptions'

// TODO: replace with db
import posts from './data'
import authors from '../Author/data'

export default {
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
  Post: {
    author: (post) => authors.find(a => a.id === post.authorId)
  },
}
