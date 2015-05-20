var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use('/api/room', require('./server/routes/room'));
app.use('/api/game', require('./server/routes/game'));
app.use(require('./server/routes/game'));
app.use(express.static(__dirname + '/assets'));
app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

app.listen(3000);