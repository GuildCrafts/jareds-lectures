


const add = function(a, b){
  return a + b
}


;(function(){

  const books = []
  const addBook = function(book){
    books.push(book)
  }

  const numberOfBooks = function(){
    return books.length
  }

  module.exports = addBook
  $('.something').on('click', addBook)

})


const add = (a, b) => a + b
const addTen = n => add(n,10)

[1,2,3].map(addTen)



const logFrog = function(){
  console.log('frog')
}

const timeoutId = setTimeout(logFrog, 100)
clearTimeout(timeoutId)

(function(){

  let logFrogTimeoutId;
  const logFrogLater = function(){
    logFrogTimeoutId = setTimeout(logFrog, 100)
  }
  const cancelLogFrog = function(){
    clearTimeout(logFrogTimeoutId)
  }

})()





