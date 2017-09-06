const addTen = function(number){
  if (typeof number !== 'number'){
    throw new Error('argument given to addTen must be a number')
  }
  if (number > 100) {
    debugger
    throw new Error('you suck')
  }
  return number + 10
}

const numbers = [1, 3, 55, '75465', 23432,12, 99]

console.log(numbers)
try {

  const biggerNumbers = numbers.map(function(number){
    try{
      return addTen(number)
    }catch(error){
      if (error.message === 'argument given to addTen must be a number'){
        return 'bad number'
      }else{
        throw error
      }
    }
  })
  console.log(biggerNumbers)
}catch(error){
  console.log('OUTER TRY/CATCH caught', error)
}
