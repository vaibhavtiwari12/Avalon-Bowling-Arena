import { isDraw, getHighestScorer } from "./findWinner";
import findWinner from "./findWinner";

const game = {
  john: {
    score: 82,
    frame: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3, 4, 6, 10],
    frameCompleted: true,
  },
  doe: {
    score: 39,
    frame: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    frameCompleted: true,
  },
};
const playerNames = ["john", "doe"];

describe("findWinner", () => {
  test("should return the John as the winner", () => {
    const winnerObj = findWinner(game, playerNames);
    expect(winnerObj.result).toBe("john has won the game with 82 points.");
  });

  test("should return 'game is tied' if players have same score", () => {
    game.doe.score = 82;
    const winnerObj = findWinner(game, playerNames);
    expect(winnerObj.result).toBe("Game is Tied");
  });

  test("should not have winner name property if game is tied.", () => {
    game.doe.score = 82;
    const winnerObj = findWinner(game, playerNames);
    expect(winnerObj.name).toBeUndefined();
  });
});

describe("isDraw", () => {
  const gameArray = [];
  beforeEach(() => {});
  test("should return true if all the players have same score", () => {
    expect(isDraw(gameArray)).toBe(true);
  });
  test("should return false if players do not have same score", () => {
    Object.keys(game).map((player) => {
      gameArray.push({
        name: player,
        score: game[player].score,
        frame: game[player].frame,
      });
    });
    expect(isDraw(gameArray)).toBe(true);
  });
});
