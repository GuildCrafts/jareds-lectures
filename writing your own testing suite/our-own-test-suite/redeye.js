// chai-expect clone

const assert = function(result, errorMessage){
  if (!result) throw new Error(errorMessage)
}

const assertEqual = function(a, b){
  assert(a === b, `expected ${a} to equal ${b}`)
}

const deepEqual = function(a, b){


}

module.exports = { assert, assertEqual }
