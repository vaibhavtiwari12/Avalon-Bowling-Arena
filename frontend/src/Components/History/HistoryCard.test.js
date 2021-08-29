import { render, screen, waitFor } from "@testing-library/react";
import AppWrapper from "../../TestUtility/AppWrapper";
import userEvent from "@testing-library/user-event";
import HistoryCard from "./HistoryCard";

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

const game = {
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
};

describe("HistoryCard", () => {
  test("should show the History Card Component", async () => {
    const store = getStore();
    render(
      <AppWrapper initialStore={store}>
        <HistoryCard game={game} />
      </AppWrapper>
    );
    const MatchIDText = screen.getByText(/Match ID:(.*)705255/i);
    expect(MatchIDText).toBeInTheDocument();
  });
  test("should show the text 'winner:John' when John is winner", async () => {
    const store = getStore();
    render(
      <AppWrapper initialStore={store}>
        <HistoryCard game={game} />
      </AppWrapper>
    );
    const winnerText = screen.getByText(/Winner:(.*)John/i);
    expect(winnerText).toBeInTheDocument();
  });
  test("should show the text 'Game was a Draw' if the winner name is 'DRAW", async () => {
    game.match.winner = "DRAW";
    const store = getStore();
    render(
      <AppWrapper initialStore={store}>
        <HistoryCard game={game} />
      </AppWrapper>
    );
    const winnerText = screen.getByText(/Game was a Draw/i);
    expect(winnerText).toBeInTheDocument();
  });
});
