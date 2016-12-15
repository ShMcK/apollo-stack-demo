import createGraphQLServer from './graphqlServer'
import createSocketServer from './socketServer'

const port = process.env.port || 4000

createGraphQLServer(4000)
createSocketServer(port + 10)
