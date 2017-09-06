module.exports.addTodo = function(todo){
  // add the todo
}

module.exports.removeTodo = function(todo){
  // add the todo
}

module.exports.completeTodo = function(todo){
  // add the todo
  module.exports.removeTodo()
}


// vs.


const addTodo = function(todo){
  // add the todo
}

const removeTodo = function(todo){
  // add the todo
}

const completeTodo = function(todo){
  // add the todo
  removeTodo()
}

module.exports = {
  addTodo,
  removeTodo,
  completeTodo,
}
