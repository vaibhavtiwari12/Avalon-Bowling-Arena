import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doSaveWinner } from "../../../Actions/actions";
import findWinner from "../../Utility/findWinner";
import { areFramesCompleted } from "../../Utility/utils";

const useGameResult = (playerNames, matchID, onGameResultSave) => {
  const [modal, setModal] = useState(false);
  const [winner, setWinner] = useState({});
  const dispatch = useDispatch();
  const toggle = () => setModal(!modal);

  const game = useSelector((state) => state.bowlingReducer.game[matchID]);
  const handleSave = () => {
    onGameResultSave();
  };
  useEffect(() => {
    if (areFramesCompleted(game)) {
      setModal(true);
    }
  }, [game]);
  useEffect(() => {
    if (modal) {
      setWinner(findWinner(game, playerNames));
    }
  }, [modal]);
  useEffect(() => {
    if (winner.hasOwnProperty("result")) {
      if (winner.name) {
        doSaveWinner(dispatch, matchID, winner, true);
      } else {
        doSaveWinner(dispatch, matchID, winner, false);
      }
    }
  }, [winner]);
  return { modal, winner, toggle, handleSave };
};
export default useGameResult;
