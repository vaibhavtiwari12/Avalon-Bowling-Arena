import GameCard from "./GameCard/GameCard";
import { useSelector } from "react-redux";
import GameResult from "./GameResult/GameResult";
import "../../css/game.css";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Game = () => {
  const gameState = useSelector((state) => state.bowlingReducer);
  const { matchID, playerNames } = gameState;
  const history = useHistory();
  const handleGameSave = () => {
    fetch("/api/bowling/add", {
      method: "POST",
      body: JSON.stringify(gameState),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log("Res", res.data);
      });
  };
  useEffect(() => {
    if (matchID === null) {
      history.push("/");
    }
  }, []);
  return (
    <div>
      <NavBar showButtons={true} />
      <div className="application">
        <div className="">
          <h4 className="text-center">Match ID: {matchID}</h4>
        </div>
        <div>
          <GameResult
            name={playerNames}
            matchID={matchID}
            onGameResultSave={handleGameSave}
          />
          <div>
            {playerNames.length > 0 &&
              playerNames.map((name) => {
                return (
                  <div key={name}>
                    <GameCard playerName={name} matchID={matchID}></GameCard>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Game;
