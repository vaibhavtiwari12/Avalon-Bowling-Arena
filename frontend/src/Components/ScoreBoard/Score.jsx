import { useEffect, useState } from "react";
import calculateScore from "./calculateScore";
const Score = ({ frames, onTotalScore, playerName }) => {
  const [score, setScore] = useState(0);
  useEffect(() => {
    setScore(calculateScore(frames));
    onTotalScore(score);
  }, [frames, score]);
  return (
    <div>
      <h4 data-testid={playerName + "_score"}>Total Score: {score || 0}</h4>
    </div>
  );
};

export default Score;
