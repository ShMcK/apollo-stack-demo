import { pubsub } from '../subscriptions'

// TODO: replace with db
import authors from './data'
import posts from '../Post/data'

export default {
  Query: {
    authors: () => authors,
  },
  Author: {
    posts: (author) => posts.filter(p => p.authorId === author.id)
  },
}
