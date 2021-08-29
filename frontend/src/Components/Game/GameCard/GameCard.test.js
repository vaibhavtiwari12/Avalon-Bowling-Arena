import { render, screen, waitFor } from "@testing-library/react";
import AppWrapper from "../../../TestUtility/AppWrapper";
import userEvent from "@testing-library/user-event";
import GameCard from "./GameCard";
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

describe("GameCard", () => {
  test("should show the player name as 'Vaibhav'", async () => {
    const store = getStore();
    render(
      <AppWrapper initialStore={store}>
        <GameCard playerName="Vaibhav" matchID="132085" />
      </AppWrapper>
    );
    const MatchIDText = screen.getByText(/Player:(.*)Vaibhav/i);
    expect(MatchIDText).toBeInTheDocument();
  });
  test("should Update Score On Each button Click", async () => {
    const store = getStore();
    render(
      <AppWrapper initialStore={store}>
        <GameCard playerName="Vaibhav" matchID="132085" />
      </AppWrapper>
    );
    await userEvent.click(screen.getByTestId("Vaibhav3"));
    await userEvent.click(screen.getByTestId("Vaibhav2"));
    expect(screen.getByText(/^Total Score:(.*)5/i)).toBeInTheDocument();
  });
  test("should NOT show the button 7 if 8 was pressed on first click", async () => {
    const store = getStore();
    render(
      <AppWrapper initialStore={store}>
        <GameCard playerName="Vaibhav" matchID="132085" />
      </AppWrapper>
    );
    await userEvent.click(screen.getByTestId("Vaibhav8"));
    expect(screen.queryByTestId(/Vaibhav7/i)).toBeNull();
  });
  test("should show the scoreBoard When first button is clicked.", async () => {
    const store = getStore();
    render(
      <AppWrapper initialStore={store}>
        <GameCard playerName="Vaibhav" matchID="132085" />
      </AppWrapper>
    );
    await userEvent.click(screen.getByTestId("Vaibhav8"));
    expect(screen.queryByTestId(/scoreboard/i)).toBeDefined();
  });
  test("should NOT show any button if frames are completed.", async () => {
    const store = getStore();
    render(
      <AppWrapper initialStore={store}>
        <GameCard playerName="Vaibhav" matchID="132085" />
      </AppWrapper>
    );
    await userEvent.click(screen.getByTestId("Vaibhav8"));
    await userEvent.click(screen.getByTestId("Vaibhav1"));
    await userEvent.click(screen.getByTestId("Vaibhav8"));
    await userEvent.click(screen.getByTestId("Vaibhav1"));
    await userEvent.click(screen.getByTestId("Vaibhav8"));
    await userEvent.click(screen.getByTestId("Vaibhav1"));
    await userEvent.click(screen.getByTestId("Vaibhav8"));
    await userEvent.click(screen.getByTestId("Vaibhav1"));
    await userEvent.click(screen.getByTestId("Vaibhav8"));
    await userEvent.click(screen.getByTestId("Vaibhav1"));
    await userEvent.click(screen.getByTestId("Vaibhav8"));
    await userEvent.click(screen.getByTestId("Vaibhav1"));
    await userEvent.click(screen.getByTestId("Vaibhav8"));
    await userEvent.click(screen.getByTestId("Vaibhav1"));
    await userEvent.click(screen.getByTestId("Vaibhav8"));
    await userEvent.click(screen.getByTestId("Vaibhav1"));
    await userEvent.click(screen.getByTestId("Vaibhav8"));
    await userEvent.click(screen.getByTestId("Vaibhav1"));
    await userEvent.click(screen.getByTestId("Vaibhav8"));
    await userEvent.click(screen.getByTestId("Vaibhav1"));
    expect(screen.queryByTestId(/Vaibhav0/i)).toBeNull();
    expect(screen.queryByTestId(/Vaibhav3/i)).toBeNull();
    expect(screen.queryByTestId(/Vaibhav4/i)).toBeNull();
    expect(screen.queryByTestId(/Vaibhav7/i)).toBeNull();
    expect(screen.queryByTestId(/Vaibhav10/i)).toBeNull();
  });
});
