import express from 'express'
import routes from './routes/index'

const app = express()
const port = 3000

app.use('/api', routes)
app.use(routes)

app.listen(port, async (): Promise<void> => {
  //await File.createThumbPath()

  const url = `\x1b[2mhttp://localhost:${port}\x1b[0m`
  console.log(`Please open ${url} to view the project `)
})

export default app
