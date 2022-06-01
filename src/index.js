var express = require('express');
var os = require("os");

var app = express();
var hostname = os.hostname();

app.use(express.static('public'));

app.get('/health', function (req, res) {
      res.format({
      'text/plain': function(){
        res.send('ok');
      }
    });
});

app.get('/*', function (req, res) {
  res.send('<html> \
    <head> \
        <title>Docker</title> \
        <link rel="stylesheet" type="text/css" href="/css/style.css"> \
    </head> \
    <body> \
        <h1>Hello from ' + hostname + req.path + '</h1> \
    <body/> \
</html>');
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Running on http://localhost:' + port);