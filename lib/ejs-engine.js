
var ejs = require('ejs');
var read = require('fs').readFileSync;
var join = require('path').join;

const renderToString = (filePath, data) => {
    var str = read(filePath, 'utf8');
    var ret = ejs.compile(str)(data);
    return ret;
}

module.exports = {
    renderToString
}
