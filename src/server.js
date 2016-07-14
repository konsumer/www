var express = require('express')
var app = express()
var port = process.env.PORT || 5000

app.use(express.static('pub'))

console.log(`Listening on http://localhost:${port}`)

app.listen(port)
