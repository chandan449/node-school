'use strict'

let http = require('http')
let bl = require('bl')

let items = [0,1,2]
let taskCount = items.length
let taskCompleted = 0
let taskResult = {}

function done() {
	taskCompleted++
	if (taskCompleted == taskCount)
		items.forEach((item) => {
			console.log(taskResult['' + item])
		})
}

function fetchURL(urlNum) {
	http.get(process.argv[2 + urlNum], (response) => {
		response.pipe(bl((err, data) => {
			if (err)
				return console.log("There was an error", err)
			taskResult[urlNum + ''] = data.toString()
			done()
		}))
	})
}

items.forEach(fetchURL)
