// @flow
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import schema from '../data/schema'

const createGraphQLServer = (port: number) => {

  express()
    .use('*', cors())
    .use('/graphql', bodyParser.json(), graphqlExpress({
      schema,
      context: {},
    }))
    .use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql',
    }))
    .listen(port, () => {
      console.log(`GraphQL Server is now running on http://localhost:${port}/graphql`)
    })

}

export default createGraphQLServer
