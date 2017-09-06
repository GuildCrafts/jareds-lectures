module.exports.add = function(a,b){
  if (typeof a !== 'number' || typeof b !== 'number')
    throw new Error('add only takes numbers')
  return a + b
}
