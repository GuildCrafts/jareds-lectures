const { assert, assertEqual } = require('./redeye')
const calculator = require('./calculator')

describe('calculator', function(){
  describe('add', function(){
    it('should take to numbers and return their sum', function(){
      assert( calculator.add(10, 5) === 15, 'expect 10+5 to equal 15')
      assertEqual(calculator.add(10, 5), 15)
    })
    it('should throw an error when given an argument that is not a number ')
  })
  describe('subtract', function(){
    it('should minus stuffs', function(){
      assertEqual(calculator.minus(10, 5), 5)
    })
  })
  describe('multiply', function(){
    it('should multiply given numbers', function(){
      // throw new Error('test fails')
    })
  })
})
