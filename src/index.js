var express = require('express');
var os = require("os");

var app = express();
var hostname = os.hostname();

var base = process.env.BASE_PATH || '/';

app.use(base, express.static('public'));

app.get(base+'health', function (req, res) {
      res.format({
      'text/plain': function(){
        res.send('ok');
      }
    });
});

app.get(base+'*', function (req, res) {
  res.send('<html> \
    <head> \
        <title>Docker</title> \
        <link rel="stylesheet" type="text/css" href="' + base + 'css/style.css"> \
    </head> \
    <body> \
        <h1>Hello from ' + hostname + req.path + '</h1> \
    <body/> \
</html>');
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Running on http://localhost' +  base + ':' + port);