const pickPeaks = require("./pickPeaks");

describe("pickPeaks", () => {
  it("returns {pos:[1], peaks:[2]} for an input of [1,2,1]", () => {
    expect(pickPeaks([1, 2, 1])).toEqual({ pos: [1], peaks: [2] });
  });

  it("returns pos[3], peaks[5] for an input of [0,1,2,5,1,0]", () => {
    expect(pickPeaks([0, 1, 2, 5, 1, 0])).toEqual({ pos: [3], peaks: [5] });
  });

  it("returns two peaks and there positions when there are two", () => {
    expect(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])).toEqual({
      pos: [3, 7],
      peaks: [6, 3]
    });
  });
});
