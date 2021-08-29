import { render, screen } from "@testing-library/react";
import AppWrapper from "../../TestUtility/AppWrapper";
import Score from "./Score";

const getStore = () => {
  return {
    bowlingReducer: {
      playerCount: 2,
      playerNames: ["Vaibhav", "John"],
      game: {
        132085: {
          Vaibhav: {
            score: 0,
            frame: [],
          },
          John: {
            score: 81,
            frame: [],
          },
        },
      },
      matchID: "132085",
    },
  };
};

describe("Score", () => {
  test("should show the Score as 0 if the Frame is empty", async () => {
    const store = getStore();
    const onTotalScore = jest.fn();
    render(
      <AppWrapper initialStore={store}>
        <Score playerNames="Vaibhav" frames={[]} onTotalScore={onTotalScore} />
      </AppWrapper>
    );
    expect(screen.getByText(/^Total Score:(.*)0/i)).toBeInTheDocument();
  });
  test("should show the Score as 5 if the Frame has '[3,2]'", async () => {
    const store = getStore();
    const onTotalScore = jest.fn();
    render(
      <AppWrapper initialStore={store}>
        <Score
          playerNames="Vaibhav"
          frames={[3, 2]}
          onTotalScore={onTotalScore}
        />
      </AppWrapper>
    );
    expect(screen.getByText(/^Total Score:(.*)5/i)).toBeInTheDocument();
  });
});
