# Converting Sync Functions to Async Functions


## Adding two numbers


#### Synchronous

```js
const add = function(a, b){
  return a + b
}

// USAGE

const sum = add(100, 34)
console.log('sum: '+sum)
```

#### Asynchronous

```js
const add = function(a, b, callback){
  callback(a + b)
}

// USAGE

add(100, 34, function(sum){
  console.log('sum: '+sum)
})

// DONE
```

## Adding An Item To A Todo List

#### Synchronous

```js
const todoList = []

const addTodoListItem = function(description){
  const item = {
    complete: false,
    description: description,
  }
  todoList.push(item)
  return item
}

// USAGE

console.log(
  addTodoListItem('Watch Rick And Morty S03E02')
)

console.log(
  addTodoListItem('Practice Rick Impression')
)

console.log(
  addTodoListItem('Play more Cornhole')
)


console.log(todoList)
// DONE
```

#### Asynchronous

```js
const todoList = []

const addTodoListItem = function(description, callback){
  let item
  try{
    item = {
      complete: false,
      description: description,
    }
    todoList.push(item)
  }catch(error){
    callback(error)
    return
  }
  callback(null, item)
}

// USAGE

addTodoListItem('Watch Rick And Morty S03E02', function(error, item){
  if (error) throw error
  console.log(item)
})

addTodoListItem('Practice Rick Impression', function(error, item){
  if (error) throw error
  console.log(item)
})

addTodoListItem('Play more Cornhole', function(error, item){
  if (error) throw error
  console.log(item)
})

console.log(todoList)
// DONE
```


#### Asynchronous (writing to a file)

```js
const fs = require('fs')

const todoListFile = process.env.HOME+'/.todoList'

const addTodoListItem = function(description, callback){
  const item = {
    complete: false,
    description: description,
  }
  const json = JSON.stringify(item)+"\n"
  fs.appendFile(todoListFile, json, 'utf8', function(error){
    error ? callback(error) : callback(null, item)
  })
}

// USAGE

addTodoListItem('Watch Rick And Morty S03E02', function(error, item){
  if (error) throw error
  console.log(item)
})
addTodoListItem('Practice Rick Impression', function(error, item){
  if (error) throw error
  console.log(item)
})
addTodoListItem('Play more Cornhole', function(error, item){
  if (error) throw error
  console.log(item)
})

// DONE?

// OR

const async = require('async')

async.map([
  'Watch Rick And Morty S03E02',
  'Practice Rick Impression',
  'Play more Cornhole',
], addTodoListItem, function(error, items) {
  console.log(items)
  // DONE
});

```


## Reading A File

#### Synchronous

```js
const readFile = function(path){
  return fs.readFileSync(path)
}

// USAGE

try{
  const readmeFileContents = readFile('./README.md')
}catch(error){
  console.log('Error reading '+path)
  console.error(error)
  throw error
}
```

#### Asynchronous

```js
const readFile = function(path, callback){
  return fs.readFile(path, callback)
}

// USAGE

readFile('./README.md', function(error, readmeFileContents){
  if (error){
    console.log('Error reading '+path)
    console.error(error)
    // throwing wont likely help us here
  }
})
```




