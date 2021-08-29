import calculateScore from "./calculateScore";

describe("calculateScore - on complete frames", () => {
  test("should return 0 if all the throws are gutter", () => {
    const frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const score = calculateScore(frames);
    expect(score).toEqual(0);
  });
  test("should return 300 if all the throws are strikes", () => {
    const frames = [
      10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10, 10,
    ];
    const score = calculateScore(frames);
    expect(score).toEqual(300);
  });
  test("should return 191 if all the frames had spare and the bonus throw has strike", () => {
    const frames = [
      9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10,
    ];
    const score = calculateScore(frames);
    expect(score).toEqual(191);
  });
  test("should return 20 if all the throws had 1 pins dropped", () => {
    const frames = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const score = calculateScore(frames);
    expect(score).toEqual(20);
  });
});

describe("calculateScore - on inComplete Frames", () => {
  describe("Strike Logic", () => {
    test("should return score 0 if the first frame has strike ", () => {
      const frames = [10, 0];
      const score = calculateScore(frames);
      expect(score).toEqual(0);
    });
    test("should return score 0 if the second frame too had strike ", () => {
      const frames = [10, 0, 10, 0];
      const score = calculateScore(frames);
      expect(score).toEqual(0);
    });
    test("should return score 27 if the first throw of third frame had 7 pins dropped", () => {
      const frames = [10, 0, 10, 0, 7];
      const score = calculateScore(frames);
      expect(score).toEqual(27);
    });
  });
  describe("Spare Logic", () => {
    test("should return score 0 if the first frame had spare ", () => {
      const frames = [7, 3];
      const score = calculateScore(frames);
      expect(score).toEqual(0);
    });
    test("should return score 17 if the first throw of third frame had 7 pins dropped ", () => {
      const frames = [7, 3, 7];
      const score = calculateScore(frames);
      expect(score).toEqual(17);
    });
  });
  describe("Last Frame", () => {
    describe("with spare", () => {
      test("should return score 36 by the end of 9th frame", () => {
        const frames = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
        const score = calculateScore(frames);
        expect(score).toEqual(36);
      });
      test("should calculate score and return 39 if the first 2 throws of 10th frame do not constitute a spare or a strike ", () => {
        const frames = [
          2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2,
        ];
        const score = calculateScore(frames);
        expect(score).toEqual(39);
      });
      test("should NOT calculate score and return 36 if the first 2 throws of 10th frame constitute a spare ", () => {
        const frames = [
          2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 3,
        ];
        const score = calculateScore(frames);
        expect(score).toEqual(36);
      });
      test("should calculate score and return 47 if the first all three throws of 10th frame are done and first 2 were constituting a spare", () => {
        const frames = [
          2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 3, 1,
        ];
        const score = calculateScore(frames);
        expect(score).toEqual(47);
      });
    });
    describe("with strike", () => {
      test("should NOT calculate score and return 36 if the first 2 throws of 10th frame are strike ", () => {
        const frames = [
          2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 10,
        ];
        const score = calculateScore(frames);
        expect(score).toEqual(36);
      });
      test("should calculate score and return 66 if the first all three throws of 10th frame are done and first 2 were constituting a spare", () => {
        const frames = [
          2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 10, 10,
        ];
        const score = calculateScore(frames);
        expect(score).toEqual(66);
      });
    });
    describe("neither spare nor strike", () => {
      test("should calculate score and return 39 after 2 throws in frame ", () => {
        const frames = [
          2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
        ];
        const score = calculateScore(frames);
        expect(score).toEqual(39);
      });
      test("should DISCARD the third value in frame and return 39 if first 2 throw do not consitute a spare or reusult in strike", () => {
        const frames = [
          2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3,
        ];
        const score = calculateScore(frames);
        expect(score).toEqual(39);
      });
    });
  });
});
