const pickPeaks = require("./pickPeaks");

describe("pickPeaks", () => {
  it("returns on peak and its position when there is only one", () => {
    expect(pickPeaks([1, 2, 1])).toEqual({ pos: [1], peaks: [2] });
    expect(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1])).toEqual({
      pos: [2],
      peaks: [3]
    });
    expect(pickPeaks([0, 1, 2, 5, 1, 0])).toEqual({ pos: [3], peaks: [5] });
    expect(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2])).toEqual({
      pos: [2],
      peaks: [3]
    });
    expect(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6])).toEqual({
      pos: [2],
      peaks: [3]
    });
  });

  it("returns two peaks and there positions when there are two", () => {
    expect(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])).toEqual({
      pos: [3, 7],
      peaks: [6, 3]
    });
    expect(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1])).toEqual({
      pos: [2],
      peaks: [3]
    });
  });

  it("returns handles peaks where there are muliples of the same number in the peak", () => {
    expect(pickPeaks([1, 2, 2, 2, 1])).toEqual({ pos: [1], peaks: [2] });
  });
});
