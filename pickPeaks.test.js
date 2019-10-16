const pickPeaks = require("./pickPeaks");

describe("pickPeaks", () => {
  it("returns {pos:[1], peaks:[2]} for an input of [1,2,1]", () => {
    expect(pickPeaks([1, 2, 1])).toEqual({ pos: [1], peaks: [2] });
  });
});
