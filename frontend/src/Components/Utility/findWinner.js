export const isDraw = (gameArray) => {
  return gameArray.every((ins) => ins.score === gameArray[0].score);
};

export const getHighestScorer = (gameArray) => {
  return gameArray.reduce((prev, curr) => {
    return prev.score > curr.score ? prev : curr;
  });
};

const findWinner = (gameDetails) => {
  const gameArray = [];
  Object.keys(gameDetails).map((player) => {
    gameArray.push({
      name: player,
      score: gameDetails[player].score,
      frame: gameDetails[player].frame,
    });
  });
  if (isDraw(gameArray)) {
    return { result: "Game is Tied" };
  } else {
    const highestScorer = getHighestScorer(gameArray);
    highestScorer[
      "result"
    ] = `${highestScorer.name} has won the game with ${highestScorer.score} points.`;
    return highestScorer;
  }
};
export default findWinner;
