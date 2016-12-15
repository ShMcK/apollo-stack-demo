import { pubsub } from './subscriptions'
import Either from 'data.either'
import { find, propEq } from 'ramda'

const posts = [{
  id: 1, title: 'First Post', votes: 5,
}, {
  id: 2, title: 'Second Post', votes: 3,
}, {
  id: 3, title: 'Third Post', votes: 4,
}]

const resolveFunctions = {
  Query: {
    posts: () => posts,
  },
  Mutation: {
    upvotePost: (_, { postId }) => {
      return Either.of(posts)
        .map(find(propEq('id', postId)))
        .map(post => {
          post.votes += 1
          return post
        })
        .fold(
        e => {
          throw new Error(`Couldn't find post with id ${postId}`)
        },
        post => {
          pubsub.publish('postUpvoted', post)
          return post
        }
        )
    },
  },
  Subscription: {
    postUpvoted: (post) => post,
  },
}

export default resolveFunctions
