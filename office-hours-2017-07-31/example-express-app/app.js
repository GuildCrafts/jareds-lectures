const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// app.use((request, response, next) => {
//   // request.body = JSON.parse(request.rawBodyText)
//   next()
// })

app.get('/', (request, response, next) => {
  response.send(`
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
  <form method="POST" action="/signup">
    <input type="text" name="colors[]" value="red"/>
    <input type="text" name="colors[]" value="orange"/>
    <input type="text" name="colors[]" value="blue"/>
    <input type="text" name="email" placeholder="email"/>
    <input type="password" name="password" placeholder="password"/>
    <input type="submit">
  </form>
</body>
</html>

  `)
})

app.post('/signup', (request, response, next) => {
  console.log('body?', request.body)
  response.json(request.body)
})

// app.get('/', (request, response, next) => {
//   console.log('ROUTE 1 CALLED')
//   // response.send('hello from route 1')
//   next()
// })

// app.get('/', (request, response, next) => {
//   console.log('ROUTE 2 CALLED')
//   response.send('hello from route 2')
// })

// app.get('/', (request, response, next) => {
//   console.log('ROUTE 3 CALLED')
//   response.send('hello from route 3')
// })


app.listen(3000)
