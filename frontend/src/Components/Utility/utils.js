import { doSaveMatchId } from "../../Actions/actions";

export const generateAndSaveMatchID = (dispatch) => {
  const randomID = Math.round(
    Math.random() * Math.random() * 1000000
  ).toString();
  doSaveMatchId(dispatch, randomID);
  return randomID;
};

export const areFramesCompleted = (gameObject) => {
  if (
    Object.keys(gameObject).length > 0 &&
    !Object.keys(gameObject).includes("winner")
  ) {
    return Object.keys(gameObject).every(
      (playerName) => gameObject[playerName].frameCompleted
    );
  }
  return false;
};
