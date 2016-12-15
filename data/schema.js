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
`

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})