import { makeExecutableSchema } from 'graphql-tools'
import { schema as Post, resolvers as postResolvers } from './Post'

export default makeExecutableSchema({
  typeDefs: [Post],
  resolvers: Object.assign({},
    postResolvers
  )
})
