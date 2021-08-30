import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { getHistoryData } from "./getHistory";
import HistoryCard from "./HistoryCard";

const History = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(false);
  const [isLoadingFinished, setisLoadingFinished] = useState(false);
  useEffect(async () => {
    try {
      const gameHistory = await getHistoryData();
      setGames(gameHistory);
      setisLoadingFinished(true);
    } catch (e) {
      setisLoadingFinished(true);
      setError(true);
    }
  }, []);
  return (
    <div>
      <NavBar showButtons={true} />
      <div className="application">
        {isLoadingFinished && !error && (
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
      {error && (
        <div className="text-center">
          <h4>SERVER ERROR</h4>
          unable to fetch data from server.Please check the connection
        </div>
      )}
    </div>
  );
};
export default History;
