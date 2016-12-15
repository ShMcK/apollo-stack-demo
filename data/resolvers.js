import { pubsub } from './subscriptions'

const posts = [{
  id: 1, title: 'First Post', votes: 5,
}, {
  id: 2, title: 'Second Post', votes: 3,
}, {
  id: 3, title: 'Third Post', votes: 4,
}]

const resolveFunctions = {
  Query: {
    posts() {
      return posts
    },
  },
  Mutation: {
    upvotePost(_, { postId }) {
      const post = posts.find(p => p.id === postId)
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`)
      }
      post.votes += 1
      // update on post vote
      pubsub.publish('postUpvoted', post)
      return post
    },
  },
  Subscription: {
    postUpvoted(post) {
      return post
    },
  },
}

export default resolveFunctions
