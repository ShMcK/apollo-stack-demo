import { pubsub } from './subscriptions'

const posts = [{
  id: 1, authorId: 1, title: 'First Post', votes: 5,
}, {
  id: 2, authorId: 2, title: 'Second Post', votes: 3,
}, {
  id: 3, authorId: 1, title: 'Third Post', votes: 4,
}]

const authors = [
  { id: 1, firstName: 'Shawn', lastName: 'McKay' },
  { id: 2, firstName: 'Mackenzie', lastName: 'Kieran' },
]

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
