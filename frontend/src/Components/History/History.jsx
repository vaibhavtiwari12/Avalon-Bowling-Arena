import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { getHistoryData } from "./getHistory";
import HistoryCard from "./HistoryCard";

const History = () => {
  const [games, setGames] = useState([]);
  const [isLoadingFinished, setisLoadingFinished] = useState(false);
  useEffect(async () => {
    try {
      const gameHistory = await getHistoryData();
      setGames(gameHistory);
      setisLoadingFinished(true);
    } catch (e) {
      console.log("error", e);
    }
  }, []);
  return (
    <div>
      <NavBar showButtons={true} />
      <div className="application">
        {isLoadingFinished && (
          <div>
            {games && games.length > 0 ? (
              games.map((game) => {
                return (
                  <HistoryCard game={game.game} key={game._id}></HistoryCard>
                );
              })
            ) : (
              <h4 className="text-center mt-4">No History Identified</h4>
            )}
          </div>
        )}
      </div>
      {!isLoadingFinished && <div className="text-center">Loading</div>}
    </div>
  );
};
export default History;
