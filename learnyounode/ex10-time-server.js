'use strict'

let net = require('net')
let strftime = require('strftime')

let server = net.createServer((socket) => {
	let timeStr = strftime('%F %H:%M', new Date()) + '\n'
	socket.end(timeStr)
})

server.listen(process.argv[2])