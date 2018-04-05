var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

var PORT = process.env.PORT || 8000

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    console.log(req.url);
    next();
});

// console.log(sitePath);
console.log("Starting server in: " + __dirname + '/assets/html/' );
app.use(express.static(__dirname + '/assets/html/'));
app.listen(PORT, function() { 
    console.log("Server running at: http://localhost:" + PORT)
})