console.log('TEST SETUP FILE')
process.env.NODE_ENV = 'test'
process.env.DATABASE_URL = process.env.TEST_DATABASE_URL

const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

global.expect = chai.expect
global.request = chai.request

