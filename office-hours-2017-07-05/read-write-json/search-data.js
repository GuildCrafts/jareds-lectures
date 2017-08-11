#!/usr/bin/env node

const fs = require('fs')
// const data = require('./data.json')

fs.readFile(__dirname+'/data.json', function(error, json){
  // if (error) throw error;
  if (error){
    console.log(error.message)
    console.log(error.stack)
    process.exit(1)
  }
  const data = JSON.parse(json)

  const searchTerm = process.argv[2].toLowerCase()

  if (typeof searchTerm === 'undefined'){
    console.warn('no search term given')
    process.exit(1)
  }

  const matchingRecords = data.filter(function(record){
    return record.rep_name.toLowerCase().includes(searchTerm)
  })


  matchingRecords.forEach(function(record){
    console.log(record.rep_name)
  })

})

