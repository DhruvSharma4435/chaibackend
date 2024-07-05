const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('ignore karo')
})
app.get('/twitter', (req, res) => {
    res.send('not ye implemented')
})
app.get('/email', (req, res) => {
    res.send('dhruvsharma9454@gamil.com')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})