'use strict'

let http = require('http')
let bl = require('bl')

http.get(process.argv[2], (response) => {
	response.pipe(bl((err, data) => {
		if (err) return console.error("There was an error", err)
		let dataAsStr = data.toString()
		console.log(dataAsStr.length)
		console.log(dataAsStr)
	}))
})