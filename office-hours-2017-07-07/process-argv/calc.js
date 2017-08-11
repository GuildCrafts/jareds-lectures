#!/usr/bin/env node

console.log(Object.keys(process).sort())
console.log(process.argv)

// const args = process.argv.splice(2)

// const operation = args[0]
// const input1 = args[1]
// const input2 = args[2]

// if (operation === 'add'){
//   console.log(
//     Number.parseFloat(input1) +
//     Number.parseFloat(input2)
//   )
// }

// if (operation === 'subtract'){
//   console.log(
//     Number.parseFloat(input1) -
//     Number.parseFloat(input2)
//   )
// }
