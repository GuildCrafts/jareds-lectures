const pg = require('./client')

const getAllEvents = callback => {
  pg.query('SELECT * FROM events', (error, result) => {
    if (error) {
      callback(error)
    }else{
      callback(null, result.rows)
    }
  })
}

module.exports = {
  getAllEvents,
}
