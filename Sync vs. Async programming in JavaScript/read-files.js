const fs = require('fs')


console.log(fs.readFileSync('./file1.txt').toString())
console.log(fs.readFileSync('./file2.txt').toString())
console.log(fs.readFileSync('./file3.txt').toString())
console.log(fs.readFileSync('./file4.txt').toString())



fs.readFile('./file1.txt', (error, contents) => {
  if (error) throw error
  console.log(contents.toString())
})

fs.readFile('./file2.txt', (error, contents) => {
  if (error) throw error
  console.log(contents.toString())
})

fs.readFile('./file3.txt', (error, contents) => {
  if (error) throw error
  console.log(contents.toString())
})

fs.readFile('./file4.txt', (error, contents) => {
  if (error) throw error
  console.log(contents.toString())
})

