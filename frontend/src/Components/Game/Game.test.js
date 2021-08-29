import { render, screen, waitFor } from "@testing-library/react";
import AppWrapper from "../../TestUtility/AppWrapper";
import Game from "./Game";
import userEvent from "@testing-library/user-event";

describe("Game", () => {
  test("should set the totalscore of each player", async () => {
    const store = {
      bowlingReducer: {
        playerCount: 2,
        playerNames: ["Vaibhav", "John"],
        game: {
          132085: {
            Vaibhav: {},
            John: {},
          },
        },
        matchID: "132085",
      },
    };
    render(
      <AppWrapper initialStore={store}>
        <Game />
      </AppWrapper>
    );
    const MatchIDText = screen.getByText(/Match ID: 132085/i);
    expect(MatchIDText).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("Vaibhav2"));
    await userEvent.click(screen.getByTestId("Vaibhav3"));
    await userEvent.click(screen.getByTestId("Vaibhav2"));
    await userEvent.click(screen.getByTestId("Vaibhav3"));
    await userEvent.click(screen.getByTestId("Vaibhav2"));
    await userEvent.click(screen.getByTestId("Vaibhav3"));
    await userEvent.click(screen.getByTestId("Vaibhav2"));
    await userEvent.click(screen.getByTestId("Vaibhav3"));
    await userEvent.click(screen.getByTestId("Vaibhav2"));
    await userEvent.click(screen.getByTestId("Vaibhav3"));
    await userEvent.click(screen.getByTestId("Vaibhav2"));
    await userEvent.click(screen.getByTestId("Vaibhav3"));
    await userEvent.click(screen.getByTestId("Vaibhav2"));
    await userEvent.click(screen.getByTestId("Vaibhav3"));
    await userEvent.click(screen.getByTestId("Vaibhav2"));
    await userEvent.click(screen.getByTestId("Vaibhav3"));
    await userEvent.click(screen.getByTestId("Vaibhav2"));
    await userEvent.click(screen.getByTestId("Vaibhav3"));
    await userEvent.click(screen.getByTestId("Vaibhav2"));
    await userEvent.click(screen.getByTestId("Vaibhav3"));

    expect(screen.getByText(/^Total Score:(.*)50/i)).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("John2"));
    await userEvent.click(screen.getByTestId("John3"));
    await userEvent.click(screen.getByTestId("John2"));
    await userEvent.click(screen.getByTestId("John3"));
    await userEvent.click(screen.getByTestId("John2"));
    await userEvent.click(screen.getByTestId("John3"));
    await userEvent.click(screen.getByTestId("John2"));
    await userEvent.click(screen.getByTestId("John3"));
    await userEvent.click(screen.getByTestId("John2"));
    await userEvent.click(screen.getByTestId("John3"));
    await userEvent.click(screen.getByTestId("John2"));
    await userEvent.click(screen.getByTestId("John3"));
    await userEvent.click(screen.getByTestId("John2"));
    await userEvent.click(screen.getByTestId("John3"));
    await userEvent.click(screen.getByTestId("John2"));
    await userEvent.click(screen.getByTestId("John3"));
    await userEvent.click(screen.getByTestId("John2"));
    await userEvent.click(screen.getByTestId("John3"));
    await userEvent.click(screen.getByTestId("John2"));
    await userEvent.click(screen.getByTestId("John5"));
    expect(screen.getByText(/^Total Score:(.*)52/i)).toBeInTheDocument();
  });
});
