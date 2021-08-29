const transformAddRequest = (game) => {
  let newGameObj = {};
  let matchEntry = game.game[game.matchID];
  newGameObj = {
    match: matchEntry,
    playerCount: game.playerCount,
    matchID: game.matchID,
    playerNames: game.playerNames,
  };
  return newGameObj;
};

module.exports = { transformAddRequest };
