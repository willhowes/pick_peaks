const pickPeaks = arrayInput => {
  let result = {
    pos: [],
    peaks: []
  };
  arrayInput.forEach((number, index) => {
    if (number === Math.max(...arrayInput)) {
      result["pos"].push(index);
      result["peaks"].push(number);
    }
  });
  return result;
};

module.exports = pickPeaks;
