'use strict'

let fs = require('fs')
let path = require('path')

module.exports = (folder, ext, callback) => {

	fs.readdir(folder, (err, files) => {
		if (err) return callback(err)
		
		files = files.filter((file) => {
			return path.extname(file) === '.' + ext
		})
		callback(null, files)
	})
}
