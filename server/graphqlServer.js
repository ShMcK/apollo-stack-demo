import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { printSchema } from 'graphql/utilities/schemaPrinter'
import schema from '../data/schema'

const createGraphQLServer = (port) => {

  const server = express().use('*', cors())

  server.use('/graphql', bodyParser.json(), graphqlExpress({
    schema,
    context: {},
  }))

  server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }))

  server.use('/schema', (req, res) => {
    res.set('Content-Type', 'text/plain')
    res.send(printSchema(schema))
  })

  server.listen(port, () => {
    console.log(`GraphQL Server is now running on http://localhost:${port}/graphql`)
  })

}

export default createGraphQLServer
