#!/usr/bin/env node

const chalk = require('chalk')
const path = require('path')
const testFiles = process.argv.slice(2)

let describeDepth = 0
const tests = []

const indent = () => '  '.repeat(describeDepth)

global.describe = function(targetDescription, handler){
  describeDepth++
  console.log(chalk.blue(indent()+targetDescription))
  handler()
  describeDepth--
}

global.it = function(behaviorDescription, handler){
  const description = indent()+'  '+behaviorDescription
  if (!handler){
    console.log(chalk.yellow(description+' (pending)'))
    return
  }
  try{
    handler()
    console.log(chalk.green(description))
  }catch(error){
    console.log(chalk.red(description))
    console.log(chalk.grey(indent()+'  '+error.message))
  }
}

testFiles.forEach(testFile => {
  require(path.resolve(__dirname, testFile))
})

// run all the tests
