const pickPeaks = arrayInput => {
  let result = {
    pos: [],
    peaks: []
  };
  if (arrayInput.length < 6) {
    arrayInput.forEach((number, index) => {
      if (number === Math.max(...arrayInput)) {
        result["pos"].push(index);
        result["peaks"].push(number);
      }
    });
  }
  arrayInput.forEach((number, index) => {
    if (index === 1) {
      return;
    }
    if (number > arrayInput[index - 1] && number > arrayInput[index + 1]) {
      result["pos"].push(index);
      result["peaks"].push(number);
    }
  });
  return result;
};

module.exports = pickPeaks;
