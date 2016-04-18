var fs = require('fs');
var homePageHtml = fs.readFileSync('homePageHtml.html');
console.log(homePageHtml.toString());