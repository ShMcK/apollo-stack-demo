import createGraphQLServer from './graphqlServer'
import createSocketServer from './socketServer'
import createWebServer from './webServer'

const port = process.env.port || 3000

createGraphQLServer(port + 1000)
createSocketServer(port + 1010)
createWebServer(port)
