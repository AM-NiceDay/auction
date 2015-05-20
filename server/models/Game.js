var gameStartClients = [];
var creator = null;
var players = {};

exports.initialize = function(roomStats) {
  creator = roomStats.creator;
  roomStats.players.forEach(function(player) {
    players[player] = {};
    players[player].money = 100;
    players[player].goods = [];
  });
};

exports.getCreator = function() {
  return creator;
};

exports.buy = function(player, cost, good) {
  if (players[player].money < cost) {
    return false;
  }

  players[player].money -= cost;
  players[player].goods.push(good);
  return true;
}

exports.getState = function() {
  return {
    creator: creator,
    players: players
  };
}

exports.getPlayerState = function(player) {
  return {
    creator: creator,
    player: players[player]
  }
};

exports.subscribeOnGameStart = function(req, res) {
  gameStartClients.push(res);

  res.on('close', function() {
    gameStartClients.splice(gameStartClients.indexOf(res), 1);
  })
};

exports.publishGameStart = function() {
  gameStartClients.forEach(function(res) {
    res.end();
  })

  gameStartClients = [];
};