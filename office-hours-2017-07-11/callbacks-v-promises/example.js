
// callbacks

const doSomething = function(callback){
  // going to do the thing eventually
  setTimeout(function(){
    // thing done
    try{
      const result = 'something'
    }catch(error){
      callback(error)
      return
    }
    callback(null, result)
  }, 100)
}


doSomething(function(error, result){
  if (error){

  }else{

  }
})



// promises

const doSomething = function(){
  return new Promise(function(resolve, reject){
    reject(new Error('it failed'))
    // setTimeout(function(){
    //   // thing done
    //   try{
    //     const result = 'something'
    //   }catch(error){
    //     reject(error)
    //     return
    //   }
    //   resolve(result)
    // }, 100)
  })
}


doSomething()
.catch(function(error){

})
.then(function(result){

})







// example

readTheFile
parseTheFile
extractData
printResults


readTheFile(funciton(error, fileContents){
  if (error) throw error
  parseTheFile(fileContents, funciton(error, data){
    if (error) throw error
    extractData(data, funciton(error, extractedData){
      if (error) throw error
      printResults(extractedData, funciton(error){
        if (error) throw error
      })
    })
  })
})

readTheFile('/a.txt')
  .catch(funciton(error){
    return readTheFile('/b.txt')
  })
  .then(parseTheFileAsJSON)
  .catch(funciton(error){
    // rescue from the error
    return parseTheFileAsXML()
  })
  .then(extractData)
  .then(printResults)
  .catch(funciton(error){
    throw error
  })



//


readFile

const fileContents = {}
readFile('a.txt', function(error, fileAContents){
  fileContents[a] = fileAContents

})
readFile('b.txt', function(error, fileBContents){

})
readFile('c.txt', function(error, fileCContents){

})
readFile('d.txt', function(error, fileDContents){

})



Promise.all([
  readFile('a.txt'),
  readFile('b.txt'),
  readFile('c.txt'),
  readFile('d.txt'),
])
  .then(parseAllFourFiles)
  .then(doWhateersNext)
  .then(function(x){
    return Promise.all([
      a(),
      b(),
      c(),
    ])
  })
  .then(function(){

  })
  .catch(function(error){


  })










 POST /api/posts


app.post('/api/posts', function(request, response){

  createPost(request.body, function(error){
    if(error){
      response.status(400).render('your data sucks')
    }else{
      response.status(200).render('your data is awesome')
    }
  })


  createPost(request.body)
  .then(function(error){
    response.status(200).render('your data is awesome')
  })
  .catch(function(error){
    response.status(400).render('your data sucks')
  })

  try{
    createPost(request.body)
  }catch(error){
    response.status(400).render('your data sucks')

  }
})




let tasks
try{
  tasks = JSON.parse(fs.readFileSync('./tasks.json'))
}catch(error){
  tasks = '[]'
}

