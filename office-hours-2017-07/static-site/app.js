const express = require('express')
const bodyParser = require('body-parser')
const app = express()



const renderErrorIfNotLoggedIn = (request, response, next) => {
  console.log('CHECKING AUTH')
  if (request.query.loggedin){
    next()
  }else{
    response.status(400).send('youre not logged in')
  }
}





app.use((request, response, next) => {
  console.log('first middleware')
  next()
})

app.use(bodyParser.urlencoded({extended: false}))

// app.use(renderErrorIfNotLoggedIn)


app.get('/', (request, response, next) => {
  console.log('homepage A')
  response.send('homepage A')
})


app.use((request, response, next) => {
  console.log('middleware right after homepage route')
  next()
})

app.get('/books/:bookId', (request, response, next) => {
  if (!request.params.bookId.match(/^\d+$/)){
    next()
    return
  }
  console.log('books show page '+request.params.bookId)
  response.send('books show page '+request.params.bookId)
})

app.get('/books/new', (request, response, next) => {
  console.log('books new page')
  response.send('books new page')
})


app.listen(3000, () => {
  console.log('http://localhost:3000')
})
