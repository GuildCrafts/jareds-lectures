console.log('TOP')
// const wait = (milliseconds) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, milliseconds)
//   })
// }

// wait(100)
//   .then(() => {
//     console.log('1 seconds has passed')
//     return wait(1500)
//   })
//   .then(() => {
//     console.log('2.5 seconds have passed')
//     return wit(500)
//   })
//   .then(() => {
//     console.log('3 seconds have passed')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(null, a + b)
  }, 1000)
}

// add(45, 83, (error, sum) => {
//   if (error) throw error
//   console.log('SUM', sum)
// })

const addPromisified = (a, b) => {
  console.log('start of addPromisified')
  return new Promise((resolve, reject) => {
    console.log('inside addPromisified\'s promise callback')
    add(a, b, (error, sum) => {
      console.log('inside add callback')
      if (error) {
        reject(error)
      }else{
        resolve(sum)
      }
    })
  })
}

console.log('right before calling addPromisified')
addPromisified(100, 75)
  .then(sum => {
    console.log('SUM2', sum)
  })
  .catch(error => {
    console.log('ERROR2!!')
    console.error(error)
  })
console.log('right after calling addPromisified')

// // Promise.resolve(42)
// //   .then(x => {
// //     console.log('x', x)
// //     return ZZZZ + 10
// //   })
// //   .then(y => {
// //     console.log('y', y)
// //     return y + 10
// //   })
// //   .catch(error => {
// //     console.log('error')
// //     console.error(error)
// //     return 99
// //   })
// //   .then(z => {
// //     console.log('z', z)
// //     return z + 10
// //   })

// // // Promise.reject(new Error('something broke'))
console.log('BOTTOM')
