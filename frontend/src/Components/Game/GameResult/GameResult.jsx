import useGameResult from "./useGameResult";
import CustomModal from "../../Utility/Components/CustomModal";
const GameResult = ({ playerNames, matchID, onGameResultSave }) => {
  const { modal, winner, toggle, handleSave } = useGameResult(
    playerNames,
    matchID,
    onGameResultSave
  );
  return (
    <div>
      <div className="mt-3 text-center">
        {winner.hasOwnProperty("result") && !modal ? (
          <div className="text-center mt-2">
            <p className="text-info">{winner.result}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <CustomModal
        modal={modal}
        onHandleToggle={toggle}
        heading="Result"
        onSave={handleSave}
        showSave={true}
      >
        {winner.result ? <div>{winner.result}</div> : ""}
      </CustomModal>
    </div>
  );
};

export default GameResult;
