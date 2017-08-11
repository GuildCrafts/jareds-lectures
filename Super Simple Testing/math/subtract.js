const subtract = function(a, b){
  return a - b;
}

module.exports = subtract

if (!module.parent){
  console.log('RUNNING TESTS FOR subtract')
  if (subtract(10,4) !== 6) {
    throw new Error('expected subtract(10,4) to return 6')
  }
  if (subtract("hello", "world") === NaN){
    throw new Error('expected subtract("hello", "world") to return NaN')
  }
}
