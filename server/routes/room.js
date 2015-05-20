var router = require('express').Router();
var Room = require('../models/Room.js');

router.post('/create', function(req, res) {
	Room.setCreator(req.body.username);
	
	var user = {
		username: req.body.username
	};
	
	Room.publish();
	res.json(user);
});

router.post('/join', function(req, res) {
	Room.addPlayer(req.body.username);

	var user = {
		username: req.body.username
	};

	Room.publish();
	res.json(user);
});

router.get('/getState', function(req, res) {
	res.json(Room.getState());
});

router.get('/subscribe', function(req, res) {
	Room.subscribe(req, res);
});

module.exports = router;