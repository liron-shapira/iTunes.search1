// Modules -   code (only share minimum)
// CommonJS, every file is module by default

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-flavor')
const sum = require('./mind-granade')
console.log(data)
console.log(sum)

sayHi(names.john)
sayHi(names.ben)
sayHi('David')
