'use strict'

let http = require('http')
let map = require('through2-map')

let server = http.createServer((request, response) => {
	let method = request.method
	// Give user feedback to use POST method
	if (method === 'POST') {
		response.writeHead(200, { 'content-type': 'text/plain' })
		request.pipe(map((chunk) => {
			return chunk.toString().toUpperCase()
		})).pipe(response)
	}
})

server.listen(process.argv[2])