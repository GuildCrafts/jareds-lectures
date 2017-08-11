Array.prototype.filter = function(checker){
  const newArray = []
  this.forEach(member =>{
    if (checker(member)) {
      newArray.push(member)
    }
  })
  return newArray
}


Array.prototype.filter = function(changer){
  const newArray = []
  this.forEach((member, index) =>{
    newArray.push(changer(member, index, this))
  })
  return newArray
}
