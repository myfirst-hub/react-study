const express = require('express')

const bodyParser = require('body-parser')

const app = express()
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

app.get('*', (req, res) => {
  res.send({
    name: 'sun'
  });
})

app.listen('3333', function () {
  console.log('server is listening on 3333')
})