
function mergeStrings(a, b) {

  a = a.split()
  b = b.split()

  var mergedWord = []

  while(a.length > 0 || b.length > 0){
    if (a.length > 0){ mergedWord.push(a.shift()) }
    if (b.length > 0){ mergedWord.push(b.shift()) }
  }

  return mergedWord.join('')



  var _a = a.split();
  // ['a','p','p']
  var _b = b.split();
  // ['f','r','i']
  var res = [];

  // loop 4 times
  for (var i=0; i < _a.length ;i++){
    res = res.push(_a[i]);
    res = res.push(_b[i]);
  }
  // 0) res = ['a','f']
  // 1) res = ['a','f','p','r']
  // 2) res = ['a','f','p','r','p','i']
  // 3) res = ['a','f','p','r','p','i','l','e']
  // 4) res = ['a','f','p','r','p','i','l','e','e','n']

  // res = ['a','f','p','r','p','i','l','e','e','n','d',s]

  return res.join()
}


mergeStrings('apple', 'friends')
// 'afprpileends'
















