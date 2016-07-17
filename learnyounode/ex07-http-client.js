'use strict'

let http = require('http')

let urlLink = process.argv[2]

http.get(urlLink, (response) => {

	response.setEncoding('utf8')
	response.on('data', console.log)
	response.on('error', console.error)

}).on('error', console.error)