var express = require('express');
var bodyParser = require('body-parser');


var messages = [];

var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io",
    }).send(JSON.stringify(messages));
});

app.post('/', function(req, res, next) {
    console.log(req.body);
    messages.push({
        message: req.body.message,
        time: new Date()
    });
    res.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    }).send(JSON.stringify(messages));
});

app.options('/', function(req, res, next) {
    res.status(200).set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }).send(JSON.stringify(messages));

});


var port = 9000;
app.listen(port, function() {
    console.log('listening on port ', port);
});
