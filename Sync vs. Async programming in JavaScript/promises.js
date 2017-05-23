console.log('TOP')


const randomNumber = function(){
  console.log('randomNumber')
  return Math.round(Math.random() * 100)
}

const randomNumberUsingACallback = function(callback){
  console.log('randomNumberUsingACallback')
  callback(Math.round(Math.random() * 100))
}

// example A
var size = randomNumber()
console.log('return value version ->', size)

// exmaple B
var size;
randomNumberUsingACallback(function(n){
  size = n
})
console.log('callback version ->', size)

const aPromiseForARandomNumber = function(){
  console.log('aPromiseForARandomNumber')
  return new Promise(function(resolve, reject){
    console.log('inside new Promise')
    resolve(randomNumber())
  })
}

// console.log(randomNumber())
var size = undefined
aPromiseForARandomNumber().then(function(n){
  console.log('then function called')
  size = n
  console.log('size is later ', size)
})
console.log('promise version -> ', size)
console.log('BOTTOM')
