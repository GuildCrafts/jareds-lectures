const commands = require('../../database/commands')

describe('commands', function(){

  describe('createEvent', function(){

    it('should insert an event into the events table', function(done){
      commands.createEvent({
        started_at: "2017-08-11",
        ended_at: "2017-08-12",
        title: "MOM Party",
        description: "MOMS know how to party",
      }, (error, event) => {
        if (error) return done(error)
        expect(event).to.be.an('object')
        expect(event.id).to.be.a('number')
        expect(event.title).to.eql("MOM Party")
        expect(event.started_at.toString()).to.eql("Fri Aug 11 2017 00:00:00 GMT-0700 (PDT)")
        expect(event.ended_at.toString()).to.eql("Sat Aug 12 2017 00:00:00 GMT-0700 (PDT)")
        done()
      })

    })
  })
})
