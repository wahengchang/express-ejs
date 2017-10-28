var express = require('express')
var app = express()
const renderToString = require('./lib/ejs-engine').renderToString
const errorHandler = require('./page_modules/error').errorHandler

console.log('errorHandler: ', errorHandler)

app.get('/', function (req, res) {
    const filePath = './view/list.ejs'
    const data = {names: ['foo', 'bar', 'baz']}
    res.send(renderToString(filePath, data))
})

// Page not found
app.use(errorHandler);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})