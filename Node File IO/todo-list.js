const fs = require('fs')
const path = require('path')


const tasksJSONFilePath = (
  path.resolve(__dirname, 'tasks.json')
)

console.log(tasksJSONFilePath)

const fileContents = fs.readFileSync(tasksJSONFilePath, 'utf8')
const state = JSON.parse(fileContents)

// console.log(state.tasks[0].description)


state.push({
  id: 1,
  complete: false,
  description: "clean the kitchen",
})

state.push({
  id: 2,
  complete: false,
  description: "sell your car",
})

console.log(state)
// const json = JSON.stringify(state, null, 2)

// fs.writeFileSync(tasksJSONFilePath, json)






// // tasks = [
// //   {
// //     complete: false,
// //     description: "clean the kitchen",
// //   },
// //   {
// //     complete: false,
// //     description: "clean the kitchen",
// //   },
// // ]


// // tasks = {
// //   "lastId": 1,
// //   "0": {
// //     complete: false,
// //     description: "clean the kitchen",
// //   },
// //   "1": {
// //     complete: false,
// //     description: "clean the kitchen",
// //   },

// // }

// // tasks.lastId = tasks.lastId + 1
// // tasks[tasks.lastId] = {
// //   description: "out new task",
// //   complete: false,
// // }




