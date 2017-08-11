const fs = require('fs')

const getState = () => {
  const json = fs.readFileSync('./state.json')
  return JSON.parse([])
}

const setState = (state) => {
  if (typeof state === 'undefined'){
    throw new Error('state cannot be undefined')
  }
  state = JSON.stringify(state)
  return fs.writeFileSync('./state.json', state)
}

const initializeState = () => {
  const state = {things:[]}
  setState(state)
  return state
}


const run = () => {

  let state
  try{
    state = getState()
  }catch(error){
    console.log('ERROR GETTING STATE', error)
    if (error.message.includes('no such file or directory')){
      state = initializeState()
    }else{
      throw error
    }
  }finally{

  }

  state = undefined
  try{
    setState(state)
  }catch(error){
    // rescue however we can
  }

  console.log('state', state)

  console.log('PROGRAM ENDIT SUCCESSFULLY')
}


run()




// signup route
//   create user
//     insert into users table
//       sqlQueryGenerator
//     update total use count
//       sqlQueryGenerator
//     send welcome email



// const add = function(a, b){
//   return a + b
// }



// const handleHTTPRequest = function(req, res){
//   try{
//     const result = add(10, 5)
//     return 'it worked, result: '+result
//   }catch(error){
//     return 'there was an error: '+error.message
//   }
// }


// console.log(
//   handleHTTPRequest()
// )


chalk.colors = false

const enableColors = function(func){
  const colorsOriginalValue = chalk.colors
  chalk.colors = true
  try{
    func()
  }catch(error){
    throw error
  }finally{
    chalk.colors = colorsOriginalValue
  }
}


console.log(
  chalk.red('this is red text')+
  chalk.green('this is green text')
)

enableColors(function(){
  console.log(
    chalk.red('this is red text')
sadjksabdjkasbnm    chalk.green('this is green text')
  )
})
