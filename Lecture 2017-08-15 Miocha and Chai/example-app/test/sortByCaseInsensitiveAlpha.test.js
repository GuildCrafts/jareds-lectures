const expect = require('chai').expect
const sortByCaseInsensitiveAlpha = require('../sortByCaseInsensitiveAlpha')

describe("sortByCaseInsensitiveAlpha", function(){

  it('should be a function', function(){
    expect(sortByCaseInsensitiveAlpha).to.be.a('function')
  })

  it('should take an array and return an array', function(){
    expect(sortByCaseInsensitiveAlpha(["z", "A", "b", "C"])).to.be.an('array')
  })

  context('when given ["z", "A", "b", "C"]', function(){
    it('should return ["A", "b", "C", "z"]', function(){
      expect(sortByCaseInsensitiveAlpha(["z", "A", "b", "C"])).to.eql(["A", "b", "C", "z"])
    })
  })

})

