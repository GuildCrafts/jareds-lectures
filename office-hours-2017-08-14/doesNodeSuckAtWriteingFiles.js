const fs = require('fs')

const contents = `some random nuymber ${Math.random()}` + (
  Array(9999).fill('something ').join('::')
)

console.log('->',   contents)
fs.writeFileSync('./whatever.txt', contents)
console.log(fs.readFileSync('./whatever.txt')+'')
