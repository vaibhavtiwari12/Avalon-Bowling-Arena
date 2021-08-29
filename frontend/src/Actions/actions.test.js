import {
  doSavePlayerCount,
  doSavePlayerNames,
  doSaveMatchId,
  doInitializeGame,
  doSaveScore,
  doMarkFramesCompleted,
  doAddThrowsToFrame,
  doSaveWinner,
} from "./actions";

describe("Actions", () => {
  test('should call dispatch method with type "PLAYER_COUNT" and count 2 on doSavePlayerCount', () => {
    const dispatch = jest.fn();
    doSavePlayerCount(dispatch, 2);
    expect(dispatch).toBeCalledWith({
      type: "PLAYER_COUNT",
      data: 2,
    });
  });
  test('should call dispatch method with type "PLAYER_NAMES" and name"Vaibhav" on doSavePlayerNames', () => {
    const dispatch = jest.fn();
    const playerNames = { Player1: "Vaibhav" };
    doSavePlayerNames(dispatch, { Player1: "Vaibhav" });
    expect(dispatch).toBeCalledWith({
      type: "PLAYER_NAMES",
      data: Object.values(playerNames),
    });
  });
  test('should call dispatch method with type "SAVE_MATCH_ID" and randomID on doSaveMatchId', () => {
    const dispatch = jest.fn();
    const randomID = 23423;
    doSaveMatchId(dispatch, 23423);
    expect(dispatch).toHaveBeenCalledWith({
      type: "SAVE_MATCH_ID",
      data: randomID,
    });
  });
  test('should call dispatch method with type "SAVE_INITAL_GAME", matchID and playerNames on doInitializeGame', () => {
    const dispatch = jest.fn();
    const matchID = 234;
    const playerNames = { Player1: "Vaibhav", Player2: "John" };
    const initialGameObject = {
      234: {
        Vaibhav: { score: 0, frame: [] },
        John: { score: 0, frame: [] },
      },
    };
    doInitializeGame(dispatch, matchID, playerNames);
    expect(dispatch).toHaveBeenCalledWith({
      type: "SAVE_INITAL_GAME",
      data: initialGameObject,
    });
  });
  test('should call dispatch method with type "SAVE_SCORE",matchID, playerName and score on doSaveScore', () => {
    const dispatch = jest.fn();
    const matchID = 234;
    const playerName = "Vaibhav";
    const score = 20;
    doSaveScore(dispatch, matchID, playerName, score);
    expect(dispatch).toHaveBeenCalledWith({
      type: "SAVE_SCORE",
      data: {
        matchID: matchID,
        name: playerName,
        score: score,
      },
    });
  });
  test('should call dispatch method with type "SAVE_FRAME_COMPLETED",matchID, playerName and frameCompleted on doMarkFramesCompleted', () => {
    const dispatch = jest.fn();
    const matchID = 234;
    const playerName = "Vaibhav";
    const frameCompleted = true;
    doMarkFramesCompleted(dispatch, matchID, playerName, frameCompleted);
    expect(dispatch).toHaveBeenCalledWith({
      type: "SAVE_FRAME_COMPLETED",
      data: {
        matchID: matchID,
        name: playerName,
        frameCompleted: frameCompleted,
      },
    });
  });
  test('should call dispatch method with type "SAVE_FRAME_COMPLETED",matchID, playerName and frames on doAddThrowsToFrame', () => {
    const dispatch = jest.fn();
    const matchID = 234;
    const playerName = "Vaibhav";
    const frames = [10, 11, 12, 13];
    doAddThrowsToFrame(dispatch, matchID, playerName, frames);
    expect(dispatch).toHaveBeenCalledWith({
      type: "ADD_FRAME_TO_GAME",
      data: {
        matchID: matchID,
        name: playerName,
        frame: frames,
      },
    });
  });
  test('should call dispatch method with type "SAVE_FRAME_COMPLETED",matchID, winner and hasWinnerName as DRAW on doSaveWinner', () => {
    const dispatch = jest.fn();
    const matchID = 234;
    const hasWinnerName = false;
    const winner = {};
    doSaveWinner(dispatch, matchID, winner, hasWinnerName);
    expect(dispatch).toHaveBeenCalledWith({
      type: "SAVE_WINNER",
      data: {
        name: "DRAW",
        matchID: parseInt(matchID),
      },
    });
  });
  test('should call dispatch method with type "SAVE_FRAME_COMPLETED",matchID, winner and hasWinnerName as Vaibhav on doSaveWinner', () => {
    const dispatch = jest.fn();
    const matchID = 234;
    const hasWinnerName = true;
    const winner = { name: "Vaibhav" };
    doSaveWinner(dispatch, matchID, winner, hasWinnerName);
    expect(dispatch).toHaveBeenCalledWith({
      type: "SAVE_WINNER",
      data: {
        name: "Vaibhav",
        matchID: parseInt(matchID),
      },
    });
  });
});
