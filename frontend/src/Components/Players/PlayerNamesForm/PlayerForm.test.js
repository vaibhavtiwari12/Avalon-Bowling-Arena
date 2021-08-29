import { render, screen } from "@testing-library/react";
import AppWrapper from "../../../TestUtility/AppWrapper";
import PlayerForm from "./PlayerForm";
import userEvent from "@testing-library/user-event";

describe("PlayerForm", () => {
  test("should show Form error if submit button is clicked", () => {
    const store = {
      bowlingReducer: {
        playerCount: 2,
        playerNames: [],
        game: { 61253: {} },
        matchID: "61253",
      },
    };
    render(
      <AppWrapper initialStore={store}>
        <PlayerForm />
      </AppWrapper>
    );
    const requestText = screen.getByText(/Please enter the Player Names:/i);
    expect(requestText).toBeInTheDocument();
    const submitButton = screen.getByText(/Submit/i);
    userEvent.click(submitButton);
    expect(screen.getByText(/Please enter Player1 name/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter Player2 name/i)).toBeInTheDocument();
  });
  test("should show error for player2 only", () => {
    const store = {
      bowlingReducer: {
        playerCount: 2,
        playerNames: [],
        game: { 61253: {} },
        matchID: "61253",
      },
    };
    render(
      <AppWrapper initialStore={store}>
        <PlayerForm />
      </AppWrapper>
    );
    const requestText = screen.getByText(/Please enter the Player Names:/i);
    expect(requestText).toBeInTheDocument();
    const input = screen.getByLabelText("Player 1");
    userEvent.type(input, "Vaibhav");
    userEvent.click(screen.getByText(/Submit/i));
    expect(screen.queryByText(/Please enter Player1 name/i)).toBeNull();
    expect(screen.getByText(/Please enter Player2 name/i)).toBeInTheDocument();
  });
  test("should show error for Duplicates if both the names are same", () => {
    const store = {
      bowlingReducer: {
        playerCount: 2,
        playerNames: [],
        game: { 61253: {} },
        matchID: "61253",
      },
    };
    render(
      <AppWrapper initialStore={store}>
        <PlayerForm />
      </AppWrapper>
    );
    const requestText = screen.getByText(/Please enter the Player Names:/i);
    expect(requestText).toBeInTheDocument();
    const input = screen.getByLabelText("Player 1");
    userEvent.type(input, "Vaibhav");
    const input2 = screen.getByLabelText("Player 2");
    userEvent.type(input2, "Vaibhav");
    userEvent.click(screen.getByText(/Submit/i));
    expect(screen.queryByText(/Please enter Player1 name/i)).toBeNull();
    expect(screen.queryByText(/Please enter Player2 name/i)).toBeNull();
    expect(
      screen.getByText(/Please enter unique name for all the Players/i)
    ).toBeInTheDocument();
  });
});
