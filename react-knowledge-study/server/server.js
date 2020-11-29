const express = require('express')

// const bodyParser = require('body-parser')

const app = express()

app.get('*', (req, res) => {
  res.send({
    name: 'sun'
  });
})

app.listen('3333', function () {
  console.log('server is listening on 3333')
})