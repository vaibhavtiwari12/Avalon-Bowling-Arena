import { render, screen, waitFor } from "@testing-library/react";
import AppWrapper from "../../TestUtility/AppWrapper";
import userEvent from "@testing-library/user-event";
import HistoryCardBody from "./HistoryCardBody";

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

describe("HistoryCardBody", () => {
  test("should show the player name as 'Vaibhav'", async () => {
    const store = getStore();
    render(
      <AppWrapper initialStore={store}>
        <HistoryCardBody game={game} />
      </AppWrapper>
    );
    const MatchIDText = screen.getByText(/Player:(.*)Vaibhav/i);
    expect(MatchIDText).toBeInTheDocument();
  });
  test("should show the Modal when 'click here to see frame' is clicked.", async () => {
    const store = getStore();
    render(
      <AppWrapper initialStore={store}>
        <HistoryCardBody game={game} />
      </AppWrapper>
    );
    await userEvent.click(screen.getByTestId("Vaibhav0"));
    const ModalText = screen.getByText(/Close/i);
    expect(ModalText).toBeInTheDocument();
  });
});
