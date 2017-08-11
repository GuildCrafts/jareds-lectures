const add = function(a, b){
  return a + b
  return Number.parseFloat(a) + Number.parseFloat(b)
}

module.exports = add

if (!module.parent){
  console.log('RUNNING TESTS FOR add')

  console.assert(
    add(1,2) === 3,
    'expected add(1,2) to return 3'
  )

  console.log('???', add("hello", "world"))

  console.assert(
    Number.isNaN(add("hello", "world")),
    'expected add("hello", "world") to return NaN'
  )

  // if (add(1,2) !== 3) {
  //   throw new Error('expected add(1,2) to return 3')
  // }
  // if (!isNaN(add("hello", "world"))){
  //   throw new Error('expected add("hello", "world") to return NaN')
  // }
}
