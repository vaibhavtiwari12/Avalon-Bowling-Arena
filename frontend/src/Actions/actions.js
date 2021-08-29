export const doSavePlayerCount = (dispatch, playerCount) => {
  dispatch({
    type: "PLAYER_COUNT",
    data: playerCount,
  });
};

export const doSavePlayerNames = (dispatch, playerNames) => {
  dispatch({
    type: "PLAYER_NAMES",
    data: Object.values(playerNames),
  });
};

export const doSaveMatchId = (dispatch, randomID) => {
  dispatch({
    type: "SAVE_MATCH_ID",
    data: randomID,
  });
};

export const doInitializeGame = (dispatch, MatchID, playerNames) => {
  const initialGameObject = generateinitialGameObject(MatchID, playerNames);
  dispatch({
    type: "SAVE_INITAL_GAME",
    data: initialGameObject,
  });
};

export const doSaveScore = (dispatch, matchID, playerName, score) => {
  dispatch({
    type: "SAVE_SCORE",
    data: {
      matchID: matchID,
      name: playerName,
      score: score,
    },
  });
};

export const doMarkFramesCompleted = (
  dispatch,
  matchID,
  playerName,
  frameCompleted
) => {
  dispatch({
    type: "SAVE_FRAME_COMPLETED",
    data: {
      matchID: matchID,
      name: playerName,
      frameCompleted: frameCompleted,
    },
  });
};

export const doAddThrowsToFrame = (dispatch, matchID, playerName, frames) => {
  dispatch({
    type: "ADD_FRAME_TO_GAME",
    data: {
      matchID: matchID,
      name: playerName,
      frame: frames,
    },
  });
};

export const doSaveWinner = (dispatch, matchID, winner, hasWinnerName) => {
  dispatch({
    type: "SAVE_WINNER",
    data: {
      name: hasWinnerName ? winner.name : "DRAW",
      matchID: parseInt(matchID),
    },
  });
};

const generateinitialGameObject = (MatchID, playerNames) => {
  let nameObj = {};
  Object.values(playerNames).map((name) => {
    nameObj[name] = { score: 0, frame: [] };
  });
  return { [MatchID]: nameObj };
};
