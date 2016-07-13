'use strict'

let fs = require('fs')

var numberOfLines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

console.log(numberOfLines)