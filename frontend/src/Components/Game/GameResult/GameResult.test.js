import { render, screen, waitFor } from "@testing-library/react";
import AppWrapper from "../../../TestUtility/AppWrapper";
import GameResult from "./GameResult";

const getStore = () => {
  return {
    bowlingReducer: {
      playerCount: 2,
      playerNames: ["Vaibhav", "John"],
      game: {
        132085: {
          Vaibhav: {
            score: 151,
            frame: [
              5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6,
            ],
            frameCompleted: true,
          },
          John: {
            score: 81,
            frame: [5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            frameCompleted: true,
          },
        },
      },
      matchID: "132085",
    },
  };
};

describe("GameCard", () => {
  test("should show the result Modal when the 'frameCompleted' is completed.", async () => {
    const store = getStore();
    render(
      <AppWrapper initialStore={store}>
        <GameResult playerNames={["Vaibhav"]} matchID="132085" />
      </AppWrapper>
    );
    const ModalText = screen.getByText(/Close/i);
    expect(ModalText).toBeInTheDocument();
  });
  test("should show the Winning text for the user Won", async () => {
    const store = getStore();
    render(
      <AppWrapper initialStore={store}>
        <GameResult playerNames={["Vaibhav"]} matchID="132085" />
      </AppWrapper>
    );
    const ResultText = screen.getByText(
      /Vaibhav has won the game with 151 points./i
    );
    expect(ResultText).toBeInTheDocument();
  });
  test("should NOT show the modal if the frame is not completed.", async () => {
    const store = getStore();
    store.bowlingReducer.game[132085].frameCompleted = false;
    render(
      <AppWrapper initialStore={store}>
        <GameResult playerNames={["Vaibhav"]} matchID="132085" />
      </AppWrapper>
    );
    expect(screen.queryByText(/Close/i)).toBeNull();
  });
});
