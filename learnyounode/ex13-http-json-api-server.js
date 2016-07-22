'use strict'

let http = require('http')
let url = require('url')

let server = http.createServer((req, res) => {
	// parse URL
	let urlObj = url.parse(req.url, true)
	let pathname = urlObj.pathname
	let timestamp = urlObj.query.iso
	let date = new Date(timestamp)

	res.writeHead(200, { 'content-type': 'application/json' })

	if (pathname === '/api/parsetime') {
		let parsedTime = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}
		res.end(JSON.stringify(parsedTime))
	} else if (pathname === '/api/unixtime') {
		let unixTime = { unixtime: date.getTime()}
		res.end(JSON.stringify(unixTime))
	} else {

	}

	// redirect query to a function mapped to url
	// If there doesn't exist a function for query URL return an error
})

server.listen(process.argv[2])