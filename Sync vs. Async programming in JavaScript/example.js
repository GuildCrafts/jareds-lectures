console.log('TOP')
const fs = require('fs')

fs.readFile('./file1.txt', function(error, contents){
  console.log(contents.toString())
})
// console.log( fs.readFileSync('./file1.txt').toString() )

setTimeout(function(){
  console.log('2 seconds later')
}, 2000)

setTimeout(function(){
  console.log('another 2 \seconds later')
}, 2000)


[1,2,3].forEach(function(n){
  console.log(n)
})

const forEach = function(callback){
  for (var i = 0; i < array.length; i++) {
    callback(array[i])
  }
}


console.log('BOTTOM')
