const expect = require('chai').expect

const Human = function(name){
  this.name = name
}

Human.prototype.getName = function(){
  return this.name
}

describe('Human', function(){
  let human

  context('when named Jared', function(){
    beforeEach(function(){
      human = new Human('Jared')
    })

    describe('getName', function(){
      it('should return Jared', function(){
        expect(human.getName()).to.eql('Jared')
      })
    })
  })

  context('when named Laura', function(){
    beforeEach(function(){
      human = new Human('Laura')
    })
    describe('getName', function(){
      it('should return Laura', function(){
        expect(human.getName()).to.eql('Laura')
      })
    })
  })


  // describe('getName', function(){

  //   let jared
  //   beforeEach(function(){
  //     console.log('BEFORE EACH')
  //     jared = new Human('Jared')
  //   })

  //   it('should return the name', function(){
  //     console.log('TEST A')
  //     expect(jared.getName()).to.eql('Jared')
  //     jared.name = 'Steve'
  //   })

  //   it('should return the name', function(){
  //     console.log('TEST B')
  //     expect(jared.getName()).to.eql('Jared')
  //   })
  // })
})
