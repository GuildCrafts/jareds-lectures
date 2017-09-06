module.exports.add = function(a,b){
  if (typeof a !== 'number' || typeof b !== 'number')
    throw new Error('add only takes numbers')
  return a + b
}

module.exports.minus = function(a,b){
  return a - b - 100000
}
