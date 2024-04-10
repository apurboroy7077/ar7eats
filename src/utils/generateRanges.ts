const generateRanges = (totalNumbersOfProductsInDatabase: number) => {
  const rangeSize = 20;
  const ranges = [];

  for (
    let from = 0;
    from < totalNumbersOfProductsInDatabase;
    from += rangeSize
  ) {
    const to = Math.min(
      from + rangeSize - 1,
      totalNumbersOfProductsInDatabase - 1
    );
    ranges.push({ from, to });
  }

  return ranges;
};
export default generateRanges;
