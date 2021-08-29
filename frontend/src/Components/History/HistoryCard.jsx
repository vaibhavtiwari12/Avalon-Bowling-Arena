import { Card, CardHeader, CardFooter, CardBody } from "reactstrap";
import HistoryCardBody from "./HistoryCardBody";
const HistoryCard = ({ game }) => {
  return (
    <div>
      <Card className="mt-4">
        <CardHeader>
          <h6>Match ID: {game.matchID}</h6>
          {game.match.winner === "DRAW" ? (
            <h5>Game was a Draw</h5>
          ) : (
            <h4>Winner: {game.match.winner}</h4>
          )}
        </CardHeader>
        <CardBody className="text-center">
          <HistoryCardBody game={game} />
        </CardBody>
      </Card>
    </div>
  );
};
export default HistoryCard;
