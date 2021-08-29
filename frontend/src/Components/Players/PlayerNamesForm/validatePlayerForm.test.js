import validatePlayerForm from "./validatePlayerForm";

describe("validatePlayerForm", () => {
  test("should return no errors if all player have names", () => {
    const names = { Player1: "Vaibhav", Player2: "John" };
    const playerCount = 2;
    const errors = validatePlayerForm(names, playerCount);
    expect(Object.keys(errors).length).toBe(0);
  });
  test("should return Error if one of the player name is not given", () => {
    const names = { Player1: "Vaibhav" };
    const playerCount = 2;
    const errors = validatePlayerForm(names, playerCount);
    expect(Object.keys(errors).length).toBe(1);
  });
  test("should return Error if players have duplicate names", () => {
    const names = { Player1: "Vaibhav", Player2: "Vaibhav" };
    const playerCount = 2;
    const errors = validatePlayerForm(names, playerCount);
    expect(Object.keys(errors).length).toBe(1);
  });
});
