const add = function(a, b){
  return a + b
}

function add(a, b){
  return a + b
}

const add = (a, b) => {
  return a + b
}

const add = (a, b) => a + b



[1,2,3,4].map(n => n + 10)




const frog = {
  name: 'Laura',
  speak: function(message){
    console.log(message)
  },
  favoriteColors: ['red', 'green', 'blue'],
  sayYourFavoriteColors: function(){
    const that = this
    this.favoriteColors.forEach((color) => {
      this.speak(color)
    })
  }
}

frog.sayYourFavoriteColors()

const cat = {
  name: 'mittens',
  speak: frog.speak,
  // sayYourFavoriteColors: frog.sayYourFavoriteColors,
  favoriteColors: ['pink', 'shartruce']
}

frog.sayYourFavoriteColors.call(cat)

