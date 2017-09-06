// const logTypeOf = function(object){
//   console.log(typeof(object), '<->', object)
// }

// // console.log('# typeof can be reliable used for these:')
// // logTypeOf(12)
// // logTypeOf("hello world")
// // logTypeOf({name: 'Jared', color: 'blue'})
// // logTypeOf()
// // logTypeOf(undefined)
// // logTypeOf(true)
// // logTypeOf(false)
// // logTypeOf(function(){})

// // console.log('# typeof not so useful here')
// // logTypeOf(null)
// // logTypeOf([1,2,3])

// // const isNull = function(object){
// //   return object === null
// // }

// // console.log('isNull(null)', isNull(null))
// // console.log('isNull(undefined)', isNull(undefined))
// // console.log('isNull(12)', isNull(12))

// // const someFunction = function(){
// //   throw new ReferenceError('your face!')
// // }

// // try{
// //   someFunction()
// // }catch(error){
// //   if (error instanceof ReferenceError){
// //     console.log('GOT REFERENCE ERROR', error)
// //   }else{
// //     console.log('GOT OTHER ERROR', error)
// //   }
// // }



// const MagicPanda = function(name){
//   this.name = name;
// }

// MagicPanda.prototype.perform = function(){
//   console.log(`${this.name} is performing!`)
// }

// const laura = new MagicPanda('Laura')
// const sal = new MagicPanda('Sal')

// laura.perform()
// sal.perform()

// logTypeOf(laura)
// logTypeOf(sal)

// console.log(laura instanceof MagicPanda)
// console.log(sal instanceof MagicPanda)

// console.log(laura instanceof Date)
// console.log(sal instanceof Date)






// const config = {
//   open: true,
//   size: 45,
// }

// laura









// Object.prototype.toString.call(o) === '[object Object]';





const isArray = function(thing){
  Object.prototype.toString.call(thing) === '[object Array]'
}

const isNumber = function(thing){
  Object.prototype.toString.call(thing) === '[object Number]'
}
