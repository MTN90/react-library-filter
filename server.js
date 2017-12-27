// Use express library
var express = require('express');
var app = express();

// Allow access from all IP addresses (CORS)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./routes')(app);

// Server Port running on 5000
app.listen(5000);
console.log("Running on port 5000 . . .");
