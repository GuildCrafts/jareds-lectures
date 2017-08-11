const app = require('../app')

describe('app', function(){
  it('should be an express instance', function(){
    expect(app.EXPRESS_APP).to.be.true
  })

  describe('GET /', function(){
    it('should render plain text', function(){
      request(app)
        .get('/')
        .end((error, response) => {
          expect(error).to.be.null
          expect(response).to.have.status(200)
        })
    })
  })

  // describe('GET /frogs', function(){
  //   context('when there are 0 frogs in the database', function(){
  //     beforeEach(function(){
  //       // truncate the frogs table
  //     })
  //   })
  //   context('when there are 10 frogs in the database', function(){
  //     beforeEach(function(){
  //       // truncate the frogs table
  //       // insert 10 frogs
  //     })
  //   })
  // })

  describe('POST /frogs', function(){
    context('when posting name=Kermit and color=green', function(){
      it('should render the new frog as JSON', function(done){
        request(app)
          .post('/frogs')
          .set('content-type', 'application/x-www-form-urlencoded')
          .send({
            name: 'Kermit',
            color: 'green',
          })
          .end((error, response) => {
            expect(error).to.be.null
            expect(response).to.have.status(200)
            expect(response.body.id).to.be.a('number')
            expect(response.body.name).to.eql('Kermit')
            expect(response.body.color).to.eql('green')
            done()
          })
      })
    })
  })
})
