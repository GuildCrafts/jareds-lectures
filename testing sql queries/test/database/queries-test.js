const queries = require('../../database/queries')

describe('queries', function(){

  describe('getAllEvents', function(){

    beforeEach(function(done){
      // insert some dummy events
      pg.query(`
        INSERT INTO
          events (
            started_at,
            ended_at,
            title,
            description
          )
        VALUES
          (
            '2017-07-24',
            '2017-07-25',
            'phill made coffee',
            'this is a fake event, this never happen'
          ),
          (
            '2017-07-20',
            '2017-07-21',
            'Jared pet his kitties',
            'so soft!'
          ),
          (
            '2017-07-18',
            '2017-07-19',
            'oakland was destroyed by dragons',
            'rrraaawwwrrrr!'
          )
        ;
      `, (error, results) => {
        done(error)
      })
    })

    it('should result in all rows in the events table', function(done){

      queries.getAllEvents(function(error, events){
        if (error) return done(error)
        expect(events).to.be.an('array')
        expect(events.length).to.eql(3)
        expect(events[0].id).to.be.a('number')
        expect(events[0].started_at.toString()).to.eql("Mon Jul 24 2017 00:00:00 GMT-0700 (PDT)")
        expect(events[0].ended_at.toString()).to.eql("Tue Jul 25 2017 00:00:00 GMT-0700 (PDT)")
        expect(events[0].title).to.eql("phill made coffee")
        expect(events[0].description).to.eql("this is a fake event, this never happen")

        done()
      })

    })
  })
})
