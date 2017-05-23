console.log('TOP')


const asyncLoop = (times, callback) => {
  console.log('asyncLoop', times)
  if (times < 1) return callback()
  setTimeout(function(){
    asyncLoop(times-1, callback)
  })
}


asyncLoop(10, function(){
  console.log('DONE')
})

console.log('BOTTOM')
