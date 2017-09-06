// return a sorted version of the given array
// sorted by case insensitive alphanumeric
module.exports = function(array){
  return array.sort(function(a, b){
    b = b.toLowerCase()
    a = a.toLowerCase()
    return a > b ? 1 : b > a ? -1 : 0
  })
}
