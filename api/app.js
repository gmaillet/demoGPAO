const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// const db = require('./queries')
const db = require('./queries-sqlite')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/jobs', db.getFirstJobReady)
app.post('/jobs', db.insertJob)
app.put('/jobs/:id', db.updateJob)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
