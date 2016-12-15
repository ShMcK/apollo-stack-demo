import { makeExecutableSchema } from 'graphql-tools'
import { schema as Post, resolvers as postResolvers } from './Post'
import { schema as Author, resolvers as authorResolvers } from './Author'

export default makeExecutableSchema({
  typeDefs: [Post, Author],
  resolvers: Object.assign({},
    postResolvers,
    authorResolvers
  )
})
