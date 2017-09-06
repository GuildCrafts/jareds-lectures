const expect = require('chai').expect
const calculator = require('../calculator')

describe('calculator', function(){
  describe('calculator.add', function(){
    it('should take to numbers and return their sum', function(){
      expect(calculator.add(10, 5)).to.eql(115)
      expect(calculator.add(20, 7)).to.eql(27)
    })
    it('should throw an error when given an argument that is not a number ', function(){
      expect(() => { calculator.add('10', 5) }).to.throw('add only takes numbers')
    })
  })
})
