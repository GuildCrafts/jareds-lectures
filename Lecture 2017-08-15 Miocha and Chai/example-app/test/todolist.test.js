const expect = require('chai').expect
const todoList = require('../todolist')

describe('todoList', function(){

  beforeEach(function(){
    todoList.items = []
  })

  describe('add', function(){

    it('should take a description and add it to the list', function(){
      expect(todoList.items.length).to.eql(0)
      todoList.add('buy some chips and salsa')
      expect(todoList.items.length).to.eql(1)
      expect(todoList.items).to.include('buy some chips and salsa')
    })

    it('should take a description and add it to the list AGAIN', function(){
      expect(todoList.items.length).to.eql(0)
      todoList.add('buy some chips and salsa')
      expect(todoList.items.length).to.eql(1)
      expect(todoList.items).to.include('buy some chips and salsa')
    })
  })
})
