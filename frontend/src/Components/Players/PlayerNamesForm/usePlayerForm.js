import { useState, useEffect } from "react";
import validatePlayerForm from "./validatePlayerForm";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { doSavePlayerNames, doInitializeGame } from "../../../Actions/actions";
import { generateAndSaveMatchID } from "../../Utility/utils";

const usePlayerForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [playerNames, setPlayerNames] = useState([]);
  const playerCount = useSelector((state) => state.bowlingReducer.playerCount);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!playerCount) {
      history.push("/PlayerCountSelector");
    }
  }, [history, playerCount]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validatePlayerForm(playerNames, playerCount);
    if (Object.keys(validationErrors).length === 0) {
      const MatchID = generateAndSaveMatchID(dispatch);
      doSavePlayerNames(dispatch, playerNames);
      doInitializeGame(dispatch, MatchID, playerNames);
      history.push("/GameHome");
    } else {
      setErrors({
        ...validationErrors,
      });
    }
  };

  const handleChange = (event) => {
    setPlayerNames({
      ...playerNames,
      [event.target.id]: event.target.value.trim(),
    });
  };

  return {
    handleChange,
    handleSubmit,
    errors,
    playerNames,
    playerCount,
  };
};
export default usePlayerForm;
