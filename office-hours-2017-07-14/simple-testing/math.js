function(){

}


const Robot = function(){
  this.parts = ['leg','face','confabulator']
}

Robot.prototype.speak = function(message){
  console.log(message)
}

Robot.prototype.listYourParts = () => {
}
Robot.prototype.listYourParts = function(){
  //
  this.parts.forEach(part => {
    this.speak()
  })

  this.parts.forEach(function(part){
    this.speak()
  })
}



// const add = (a,b) =>  a + b

// [1,2,3].map(n => n + 10)

// getUser = userId => {
//   return db.select('select & from users where userId = ?', userId)
//     .then(user => {
//       // do something
//       return user
//     })
// }

// fs.readFile('/asdsa.', (error, contents) => {
//   console.log(contents)
// })

// inheritance of this
// implicit return




// const Math = {}

// Math.add = function(a, b){
//   return a + b + b
// }

// module.exports = Math

// if (!module.parent) (function(){
//   console.log('testing Math')

//   console.assert(Math.add(10, 14) === 24, 'expected 24')

// })()
