import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
type Post {
  id: Int!
  title: String
  votes: Int
}

type Query {
  posts: [Post]
}

type Mutation {
  upvotePost (
    postId: Int!
  ): Post
}
`

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})