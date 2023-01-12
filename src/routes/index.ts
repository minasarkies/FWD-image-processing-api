import express from 'express'
import getImages from './api/getImages'

const routes: express.Router = express.Router()

routes.use('/api/getImages', getImages)

routes.get(
  '/',
  (request: express.Request, response: express.Response): void => {
    response.send(
      '<h1>Welcome</h1><h2>Please enter the image name and dimentions in the following manner</h2><p>Examples:<ul><li><a href="/api/getImages?filename=fjord">/api/getImages?filename=fjord</a></li><li><a href="/api/getImages?filename=fjord&width=100&height=100">/api/getImages?filename=fjord&width=100&height=100</a></li></ul></p>'
    )
  }
)

export default routes
