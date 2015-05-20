var router = require('express').Router();
var Game = require('../models/Game');
var Room = require('../models/Room');
var Goods = require('../models/Goods');

var interval;

router.get('/subscribeOnGameStart/:username', function(req, res) {
	Game.subscribeOnGameStart(req, res);
});

router.get('/start', function(req, res) {
	Game.publishGameStart();
	Game.initialize(Room.getState());


	publishGood();
	interval = setInterval(function() {
		publishGood();
	}, 3000);

	res.end();
});

router.get('/buy/:username', function(req, res) {
	console.log('Username:', req.params.username);
	console.log('Current Price:', Goods.getCurrentPrice());
	console.log('Current Good:', Goods.getCurrentGood());
	if (Game.buy(req.params.username, Goods.getCurrentPrice(), Goods.getCurrentGood())) {
		clearInterval(interval);
		if (nextGood()) {
			publishGood();
			interval = setInterval(function() {
				publishGood();
			}, 3000);
		}
		
		res.json(Game.getPlayerState(req.params.username));
	}
});

function publishGood() {
	if (Goods.getNextPrice() < 0) {
		if(!Goods.getNextGood()) {
			clearInterval(interval);
			Goods.publishResults(Game.getState());
			return;
		}
	}
	Goods.publishCurrentGood();
}

function nextGood() {
	if(!Goods.getNextGood()) {
		clearInterval(interval);
		Goods.publishResults(Game.getState());
		return false;
	}

	return true;
}

router.get('/subscribeOnGoods', function(req, res) {
	Goods.subscribe(req, res);
});

router.get('/:username', function(req, res) {
	var gameState = Game.getState();
	if (req.params.username == gameState.creator) {
		gameState.isCreator = true;
		res.json(gameState);
	} else {
		res.json(Game.getPlayerState(req.params.username));
	}
});

module.exports = router;