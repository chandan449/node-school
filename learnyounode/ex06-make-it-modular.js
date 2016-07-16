'use strict'

let filterFiles = require('./filtered-ls-2')

let folder = process.argv[2]
let ext = process.argv[3]

filterFiles(folder, ext, (err, filteredFiles) => {
	if (err)
		return console.error('There was an error:', err)

	filteredFiles.forEach((file) => {
		console.log(file)
	})
})