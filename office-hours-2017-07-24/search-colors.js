const query = process.argv[2].toLowerCase()
const colors = require('./colors')

console.log('searching for '+query)

// console.log('all colors', colors)

const colorNames = colors.map(x => x.color)

const matchingColorNames = colorNames.filter(colorName => {
  return colorName.toLowerCase().includes(query)
})

console.log('matchingColorNames', matchingColorNames)
