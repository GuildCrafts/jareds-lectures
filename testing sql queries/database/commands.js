const pg = require('./client')

const createEvent = (event, callback) => {
  pg.query(`
    INSERT INTO
      events (
        started_at,
        ended_at,
        title,
        description
      )
    VALUES
      ($1, $2, $3, $4)
    RETURNING
      *
  `,
  [
    event.started_at,
    event.ended_at,
    event.title,
    event.description,
  ],
  (error, result) => {
    if (error) {
      callback(error)
    }else{
      callback(null, result.rows[0])
    }
  })
}

module.exports = {
  createEvent,
}
