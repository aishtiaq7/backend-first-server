const express = require('express')
const app = express()

console.log('----here----!_!_!')
app.get('/', function (req, res) {
  console.log('inside - / funcion_!_!_!')
  res.send('Hello World')
})

app.listen(3000)