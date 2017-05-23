console.log('TOP');

const colors = ['red', 'yellow', 'green']

const forEach = function(array, callback){
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}

forEach(colors, function(item, index, array){
  console.log(item)
})

console.log('BOTTOM')
