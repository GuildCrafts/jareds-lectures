const thingsIWantToLog = []

thingsIWantToLog.push('hello')
thingsIWantToLog.push('from')
thingsIWantToLog.push('the')
thingsIWantToLog.push('moon')



// console.log(...thingsIWantToLog)


// const log = console.log
// log.call(console, 1,2,3)

console.log.call(console, 1,2,3)
console.log.apply(console, [1,2,3])
// console.log.apply(console, thingsIWantToLog)
console.log.apply(console, thingsIWantToLog)

const log = console.log.bind(console)


log = function(message){
  return console.log(message)
}
