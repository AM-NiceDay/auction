var creator = null;
var players = [];
var clients = [];

function getState() {
  return {
    creator: creator,
    players: players
  }
}

exports.setCreator = function(creatorName) {
  creator = creatorName;
};

exports.addPlayer = function(player) {
  players.push(player);
}

exports.getState = getState;

exports.subscribe = function(req, res) {
  clients.push(res);
};

exports.publish = function() {
  clients.forEach(function(res) {
    res.json(getState());
  });

  clients = [];
};