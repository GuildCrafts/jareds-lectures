const fs = require('fs')

const files = [
  'a.txt',
  'b.txt',
  'asdsadsa.txt',
  'c.txt',
  'd.txt',
]

const readAllTheFiles = function(callback){
  files.forEach(function(file, index){
    fs.readFile(__dirname+'/'+file, function(error, contents){
      if (error) {
        callback(error);
        return;
      }
    })
  })
}


const fileContents = readAllTheFiles()

readAllTheFiles(function(error, fileContents){

})

console.log('ALL THE FILES:', fileContents)
