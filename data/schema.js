import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'
import Author from './Author/schema'
import Post from './Post/schema'

export default makeExecutableSchema({
  typeDefs: [Post, Author],
  resolvers,
})