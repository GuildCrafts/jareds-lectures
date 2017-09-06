const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (request, response, next) => {
  // response.send('<h1> woot </h1>')
  // response.render('homepage', {
  //   currentUser: {
  //     name: 'Jared Grippe'
  //   }
  // })
  response.sendFile(__dirname+'/someStatic.html')
})


// GET  /api/v1/books
// GET  /api/v1/books/:bookId
// GET  /api/v1/books/:bookId/edit
// POST /api/v1/books/:bookId/update
// POST /api/v1/books/:bookId/delete


          const apiRouter = new express.Router

          apiRouter.get('/books')
          apiRouter.get('/books/:bookId')
          apiRouter.get('/books/:bookId/edit')
          apiRouter.post('/books/:bookId/update')
          apiRouter.post('/books/:bookId/delete')

app.use('/api/v1/', apiRouter)



app.listen(3000)
