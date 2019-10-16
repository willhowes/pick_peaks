const pickPeaks = require("./pickPeaks");

describe("pickPeaks", () => {
  it("returns {pos:[1], peaks:[2]} for an input of [1,2,1]", () => {
    expect(pickPeaks([1, 2, 1])).toEqual({ pos: [1], peaks: [2] });
  });

  it("returns pos[3], peaks[5] for an input of [0,1,2,5,1,0]", () => {
    expect(pickPeaks([0, 1, 2, 5, 1, 0])).toEqual({ pos: [3], peaks: [5] });
  });
});
