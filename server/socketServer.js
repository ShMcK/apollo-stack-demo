import { createServer } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { subscriptionManager } from '../data/subscriptions'

const createSocketServer = (port) => {

  const websocketServer = createServer((request, response) => {
    response.writeHead(404)
    response.end()
  })

  websocketServer.listen(port, () => {
    console.log(`Websocket Server is now running on http://localhost:${port}`)
  })

  new SubscriptionServer(
    { subscriptionManager },
    websocketServer
  )
}

export default createSocketServer
