import { Button, ButtonGroup } from "reactstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { doSavePlayerCount } from "../../Actions/actions";
import NavBar from "../NavBar/NavBar";

const PlayerCountForm = () => {
  const history = useHistory();
  const [playerCount, setPlayerCount] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    doSavePlayerCount(dispatch, playerCount);
    if (playerCount > 1) {
      history.push("/PlayerNameForm");
    }
  }, [playerCount, dispatch, history]);
  return (
    <div>
      <NavBar showButtons={true} />
      <div className="application">
        <h2 className="text-center">
          Please select the number of players playing.
        </h2>
        <ButtonGroup className="d-grid gap-2 mt-4">
          <Button
            color="primary"
            block
            onClick={() => setPlayerCount(2)}
            active={playerCount === 2}
          >
            Two
          </Button>
          <Button
            color="primary"
            block
            onClick={() => setPlayerCount(3)}
            active={playerCount === 3}
          >
            Three
          </Button>
          <Button
            color="primary"
            block
            onClick={() => setPlayerCount(4)}
            active={playerCount === 4}
          >
            Four
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
export default PlayerCountForm;
