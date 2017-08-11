const { Client } = require('pg')

const connectionString = process.env.DATABASE_URL ||
  'postgresql://localhost:5432/testing-sql-queries'

const client = new Client({
  connectionString: connectionString,
})

client.connect()

module.exports = client
