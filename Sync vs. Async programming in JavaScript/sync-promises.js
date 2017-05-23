console.log('TOP')

const randomNumber = () =>
  Math.round(Math.random() * 100)

const promiseOfARandomNumber = () =>
  new Promise((resolve, reject) => {
    console.log('inside new promises')
    resolve(randomNumber())
  })




console.log(randomNumber())

promiseOfARandomNumber().then(console.log)

console.log('BOTTOM')
