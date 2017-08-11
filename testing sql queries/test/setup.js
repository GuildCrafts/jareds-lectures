process.env.DATABASE_URL = 'postgresql://localhost:5432/testing-sql-queries-test'

global.expect = require('chai').expect

global.pg = require('../database/client')

beforeEach(function(done){
  pg.query('TRUNCATE events', (error, results) => {
    done(error)
  })
})
