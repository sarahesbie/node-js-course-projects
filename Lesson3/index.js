var path = require("path");

// path.basename method will give the trailing part of the path
let fileNameResult = path.basename("/public_html/home/index.html");

// path.dirname will give you the directory name of a specified path
let dirNameResult = path.dirname("/public_html/home/index.html");

// path.extname will give you the extension of the path
let extNameResult = path.extname("/public_html/home/index.html");

// console will log "index.html"
console.log(fileNameResult);

// console will log "public_html/home"
console.log(dirNameResult);

// console will log ".html"
console.log(extNameResult);
