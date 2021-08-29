import ScoreBoard from "../../ScoreBoard/ScoreBoard";
import NumberButtons from "../../Utility/Components/NumberButtons";
import useGameCard from "./useGameCard";
import { Card, CardHeader, CardFooter, CardBody } from "reactstrap";
import Score from "../../ScoreBoard/Score";

const GameCard = ({ playerName, matchID }) => {
  const { activeButtons, frames, handleThrow, handleScore } = useGameCard(
    playerName,
    matchID
  );
  return (
    <Card className="mt-4">
      <CardHeader>
        <h4>Player: {playerName}</h4>
      </CardHeader>
      <CardBody className="text-center">
        <ScoreBoard frames={frames} />
        <NumberButtons
          activeButtons={activeButtons}
          handleThrow={handleThrow}
          playerName={playerName}
        />
      </CardBody>
      <CardFooter>
        <Score
          frames={frames}
          onTotalScore={handleScore}
          playerName={playerName}
        />
      </CardFooter>
    </Card>
  );
};
export default GameCard;
