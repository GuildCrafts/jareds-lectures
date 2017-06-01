#!/usr/bin/env node

const request = require('request')
const cheerio = require('cheerio')


const HOST = 'http://beta.fortune.com'
const URL = 'http://beta.fortune.com/fortune500/'

request(URL, function(error, response, body){
  if (error) {
    console.error(error)
    process.exit(1)
  }
  const $ = cheerio.load(body)

  const companies = []

  $('.company-title').each(function(){
    companies.push({
      title: $(this).text(),
      url: HOST+$(this).parent().attr('href'),
    })
  })

  // companyTitles
  //  for each company title
  // request the company specific page
  // get the sub data we need
  //

  let revChangeRequestsCompleted = 0
  companies.forEach(function(company){
    // console.log('TITLE', company.title)
    request(company.url, function(error, response, body){
      revChangeRequestsCompleted += 1
      const $ = cheerio.load(body)
      company.revChange = $('.ranking-slide:nth-child(3) .data').text()
      // console.log('rev change for ', company.title, ' is ', company.revChange)

      if (revChangeRequestsCompleted === companies.length){
        // console.log('ALL DONE :D')
        companies.forEach(function(company){
          console.log(company.title, company.revChange)
        })
      }
    })
  })

})
