const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.render('homepage')
})

app.listen(3000, () => {
  console.log(`http://localhost:3000`)
})
