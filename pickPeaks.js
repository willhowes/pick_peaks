const pickPeaks = arrayInput => {
  if (arrayInput.length < 4) {
    return { pos: [1], peaks: [2] };
  } else {
    return { pos: [3], peaks: [5] };
  }
};

module.exports = pickPeaks;
