const request = require('request-promise')


const urls = [
  'http://pokeapi.co/api/v2/pokemon/1',
  'http://pokeapi.co/api/v2/pokemon/2',
  'http://pokeapi.co/api/v2/pokemon/3',
  'http://pokeapi.co/api/v2/pokemon/4',
  'http://pokeapi.co/api/v2/pokemon/5',
]

urls.map(console.log)

const logAndForwardResponse = function(response){
  console.log('DONE', url)
  return response
}

const requestWithLogging = function(url){
  console.log('REQ', url)
  return request(url).then(logAndForwardResponse)
}

Promise.all(
  urls.map(requestWithLogging)
).then(function(responses){
  console.log('GOT THEM ALL')
})

// var responses = []

// urls.forEach(function(url){
//   console.log('REQ', url)
//   request(url, function(error, response){
//     if (error) throw error
//     console.log('DONE', url)
//     responses.push(response)
//     if (responses.length === urls.length){
//       console.log('GOT THEM ALL')
//     }
//     // console.log(response.body)
//   })
// })



