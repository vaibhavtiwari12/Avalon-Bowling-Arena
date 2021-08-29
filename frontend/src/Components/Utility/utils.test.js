import * as actions from "../../Actions/actions";
import { generateAndSaveMatchID, areFramesCompleted } from "./utils";

const gameObject = {
  john: {
    score: 82,
    frame: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3, 4, 6, 10],
    frameCompleted: true,
  },
  doe: {
    score: 39,
    frame: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    frameCompleted: true,
  },
};

describe("generateAndSaveMatchID", () => {
  test("should return random ID when called", () => {
    const dispatch = jest.fn();
    const matchID = generateAndSaveMatchID(dispatch);
    expect(parseInt(matchID)).toBeGreaterThan(0);
  });
  test("should call 'doSaveMatchId' when randomID is called", () => {
    const spy = jest.spyOn(actions, "doSaveMatchId").mockReturnValue("c");
    const dispatch = jest.fn();
    generateAndSaveMatchID();
    expect(spy).toBeCalled();
  });
});
describe("areFramesCompleted", () => {
  test("should return true if game Object has frameCompleted as true and has no winner property", () => {
    const game = { ...gameObject };
    const frameCompletionResult = areFramesCompleted(game);
    expect(frameCompletionResult).toBe(true);
  });
  test("should return false if game object is empty", () => {
    const game = {};
    const frameCompletionResult = areFramesCompleted(game);
    expect(frameCompletionResult).toBe(false);
  });
  test("should return false if game object has winner property", () => {
    const game = { ...gameObject };
    game["winner"] = "john";
    const frameCompletionResult = areFramesCompleted(game);
    expect(frameCompletionResult).toBe(false);
  });
  test("should return false if game object does not have framesCompleted to be true", () => {
    const game = { ...gameObject };
    delete game.john.frameCompleted;
    const frameCompletionResult = areFramesCompleted(game);
    expect(frameCompletionResult).toBe(false);
  });
});
