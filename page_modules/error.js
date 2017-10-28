const renderToString = require('../lib/ejs-engine').renderToString

const errorHandler = (req, res, next) => {
    const filePath = './view/error.ejs'
    const data = { 
        status: 404, 
        url: req.url,
        message: 'page not found'
    }
    res.send(renderToString(filePath, data))
}

module.exports = {
    errorHandler
}
