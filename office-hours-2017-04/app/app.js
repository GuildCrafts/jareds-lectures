process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'development'){
  require('dotenv').load()
}

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (request, response, next) => {
  response.send('this is the homepage')
})

app.post('/frogs', (request, response, next) => {
  response.json({
    id: Math.round(Math.random() * 100),
    name: request.body.name,
    color: request.body.color,
  })
})


// if (process.env.NODE_ENV === 'test'){
//   app.get('/')
// }



const port = process.env.PORT || 3000

if (process.env.NODE_ENV === 'test'){
  app.EXPRESS_APP = true
  module.exports = app
}else{
  app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })
}


