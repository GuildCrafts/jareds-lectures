fs.readFile('./things.txt', function(error, contents){

  fs.readFile('./things2.txt', function(error, contents){

  })

})


// -- browser


XMLHttpRequest

console.log('A')
fetch('GET', '/users/5.json', function(response){
  console.log('B')
})
console.log('C')
