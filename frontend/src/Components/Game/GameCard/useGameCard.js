import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  doAddThrowsToFrame,
  doMarkFramesCompleted,
  doSaveScore,
} from "../../../Actions/actions";

const useGameCard = (playerName, matchID) => {
  const dispatch = useDispatch();
  const [activeButtons, setActiveButtons] = useState(11);
  const [frames, setFrames] = useState([]);
  let [rollCounter, setRollCounter] = useState(1);

  const handleThrow = (pinsDropped) => {
    if (rollCounter % 2 == 0) {
      setActiveButtons(11);
    } else {
      setActiveButtons(11 - pinsDropped);
    }
    setFrames((frames) => [...frames, pinsDropped]);
    setRollCounter((rollCounter) => rollCounter + 1);
    if (pinsDropped === 10 && rollCounter < 19) {
      handleThrow(0);
    }
  };

  const isEligibleForBonusThrow = () => {
    if (
      frames[rollCounter - 2] + frames[rollCounter - 3] === 10 ||
      frames[rollCounter - 3] === 10
    ) {
      return true;
    }
    return false;
  };

  const handleLastFrame = () => {
    if (rollCounter === 20) {
      if (frames[rollCounter - 2] == 10) {
        setActiveButtons(11);
      }
    }
    if (rollCounter === 21) {
      if (isEligibleForBonusThrow()) {
        setActiveButtons(11);
      } else {
        setActiveButtons(null);
      }
    }
    if (rollCounter === 22) {
      setActiveButtons(null);
    }
  };

  const saveProgress = () => {
    doAddThrowsToFrame(dispatch, matchID, playerName, frames);
  };

  const handleScore = (score) => {
    doSaveScore(dispatch, matchID, playerName, score);
  };

  useEffect(() => {
    if (rollCounter > 19) {
      handleLastFrame();
    }
    if (frames.length > 0 && activeButtons === null) {
      doMarkFramesCompleted(dispatch, matchID, playerName, true);
    }
    saveProgress();
  }, [rollCounter, frames, activeButtons]);

  return { activeButtons, frames, handleThrow, handleScore };
};

export default useGameCard;
