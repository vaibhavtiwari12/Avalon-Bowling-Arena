import { render, screen, waitFor, act } from "@testing-library/react";
import AppWrapper from "../../TestUtility/AppWrapper";
import History from "./History";
import { getHistoryData } from "./getHistory";

const getStore = () => {
  return {
    bowlingReducer: {
      playerCount: 2,
      playerNames: ["Vaibhav", "John"],
      game: {
        132085: {
          asdf: {
            Vaibhav: {},
          },
          asa: {
            John: {},
          },
        },
      },
      matchID: "132085",
    },
  };
};

const game = [
  {
    _id: "612a4ce14c511f7d7430a317",
    game: {
      match: {
        Vaibhav: {
          score: 20,
          frame: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          frameCompleted: true,
        },
        John: {
          score: 40,
          frame: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
          frameCompleted: true,
        },
        winner: "John",
      },
      playerCount: 2,
      matchID: "705255",
      playerNames: ["Vaibhav", "John"],
    },
    __v: 0,
  },
];
jest.mock("./getHistory");
describe("History", () => {
  test("should show the 'Loading' message when the component is fetching the data", async () => {
    const store = getStore();
    await act(async () => {
      render(
        <AppWrapper initialStore={store}>
          <History game={game} />
        </AppWrapper>
      );
      const MatchIDText = screen.getByText(/Loading/i);
      expect(MatchIDText).toBeInTheDocument();
    });
  });
  test("should show the History Card Component when the data is loaded.", async () => {
    const store = getStore();
    const fetchedGame = game;
    getHistoryData.mockResolvedValueOnce(fetchedGame);
    await act(async () => {
      render(
        <AppWrapper initialStore={store}>
          <History game={game} />
        </AppWrapper>
      );
    });
    expect(getHistoryData).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/Winner:(.*)John/i)).toBeInTheDocument();
  });
  test("should show the message 'No History Identified' if API return no data", async () => {
    const store = getStore();
    const fetchedGame = [];
    getHistoryData.mockResolvedValueOnce(fetchedGame);
    await act(async () => {
      render(
        <AppWrapper initialStore={store}>
          <History game={game} />
        </AppWrapper>
      );
    });
    expect(getHistoryData).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/No History Identified/i)).toBeInTheDocument();
  });
});
