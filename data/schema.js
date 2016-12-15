import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int!
  title: String
  votes: Int
  author: Author
}

type Query {
  posts: [Post]
}

type Mutation {
  upvotePost (
    postId: Int!
  ): Post
}

type Subscription {
  postUpvoted: Post
}
`

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})