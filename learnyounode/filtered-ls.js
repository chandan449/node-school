'use strict'

let fs = require('fs')
let path = require('path')

let folder = process.argv[2]
let fileExtension = '.' + process.argv[3]

fs.readdir(folder, (err, files) => {
	if (err) return console.log(err)
	for (let i = 0; i < files.length; i++) {
		if (path.extname(files[i]) === fileExtension)
			console.log(files[i])
	}
})