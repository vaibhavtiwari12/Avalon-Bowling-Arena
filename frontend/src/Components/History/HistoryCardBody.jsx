import { useState } from "react";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import CustomModal from "../Utility/Components/CustomModal";

const HistoryCardBody = ({ game }) => {
  const [modal, setModal] = useState(false);
  const [player, setPlayer] = useState("");
  const toggle = () => setModal(!modal);
  const handleModal = (player) => {
    setPlayer(player);
    setModal(true);
  };
  return (
    <div>
      {Object.values(game.playerNames).map((player, index) => {
        return (
          <div
            key={player}
            className={index !== 0 ? "text-start mt-4" : "text-start"}
          >
            <h6>Player: {player}</h6>
            <div>Score : {game.match[player].score}</div>
            <div>
              Frame :
              <a
                data-testid={player + index}
                onClick={(e) => handleModal(player)}
                className="link-info"
              >
                Click to see frame data
              </a>
            </div>
          </div>
        );
      })}
      {player !== "" && (
        <CustomModal
          heading={"Frames for " + player}
          modal={modal}
          onHandleToggle={toggle}
        >
          <ScoreBoard frames={game.match[player].frame}></ScoreBoard>
        </CustomModal>
      )}
    </div>
  );
};
export default HistoryCardBody;
