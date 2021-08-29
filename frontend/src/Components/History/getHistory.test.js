import { getHistoryData } from "./getHistory";

const fetchInstance = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    });
});

afterAll(() => {
  global.fetch = fetchInstance;
});

describe("getHistoryData", () => {
  test("should return the black Array", async () => {
    const json = await getHistoryData();
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(0);
  });
});
