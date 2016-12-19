
const express = require('express')
const { join } = require('path')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const createWebServer = (port: number) => {

  const isDevelopment = process.env.NODE_ENV !== 'production'

  const config = isDevelopment !== 'production'
    ? require('../config/webpack.config.dev')
    : require('../config/webpack.config.prod')

  const compiler = webpack(config)
  const middleware = webpackMiddleware(compiler)

  express()
    .use(middleware)
    .use(webpackHotMiddleware(compiler))
    .get('*', function response(req, res) {
      res.write(middleware.fileSystem.readFileSync(join(__dirname, '..', 'public/index.html')))
      res.end()
    })
    // Load static assets from public directory
    .use(express.static(join(__dirname, '..', 'public')))
    // 404: Page not found
    .use((req, res, next) => {
      res.status(404).send('Page not found...')
      next()
    })
    .listen(port, () => {
      console.log('Express server running on port', port)
    })
}

export default createWebServer
