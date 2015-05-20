var gameClients = [];
var goods = ['apple', 'tomato'];
var currentGood = null;
var currentPrice = null;

exports.getNextGood = function() {
  currentGood = goods.shift();
  currentPrice = 100;
  return currentGood;
}

exports.getNextPrice = function() {
  var delta = Math.round(Math.random() * 9) + 1;
  currentPrice -= delta;
  return currentPrice;
}

exports.getCurrentGood = function() {
  if (currentGood == null) {
    exports.getNextGood();
  }
  return currentGood;
}

exports.getCurrentPrice = function() {
  return currentPrice;
}

exports.subscribe = function(req, res) {
  gameClients.push(res);

  res.on('close', function() {
    gameClients.splice(gameClients.indexOf(res), 1);
  });
}

exports.publishCurrentGood = function() {
  var good = {        
    name: currentGood,
    price: currentPrice
  };
  gameClients.forEach(function(res) {
    res.json(good);
  });

  gameClients = [];
}

exports.publishResults = function(gameState) {
  var gameResults = {        
    isResults: true,
    results: gameState
  }

  gameClients.forEach(function(res) {
    res.json(gameResults);
  });

  gameClients = [];
}