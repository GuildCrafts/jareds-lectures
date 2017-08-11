const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <script src="/script.js"></script>
      </head>
      <body>
        <button>click me</button>
        <pre></pre>
      </body>
    </html>
  `)
})

app.patch('/pugs', (req, res) => {
  res.json({
    pugs: 'are ugly'
  })
})


app.listen(3000)
