var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.post('/api/createRoom', function(req, res) {
	console.log(req.body);
	res.send('Good job, ' + req.body.name + '!!!');
});

app.use(express.static(__dirname + '/client'));
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

module.exports = app;