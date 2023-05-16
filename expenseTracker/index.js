// EXAMPLE ONE - read index.html file on port 8080 in browser

// var http = require("http");
// var fs = require("fs");

// http
//   .createServer(function (req, res) {
//     fs.readFile("demo.html", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);

//EXAMPLE TWO - append to file

// var fs = require("fs");

// fs.appendFile("message.txt", "Append the data in this file ", function (err) {
//   if (err) throw err;
//   console.log("Data successfully appended to file!");
// });

// EXAMPLE THREE - write to file (and overwrite)

var fs = require("fs");

fs.writeFile(
  "message.txt",
  "Write (and overwrite) the data in this file",
  function (err) {
    if (err) throw err;
    console.log("Data successfully written to file");
  }
);
