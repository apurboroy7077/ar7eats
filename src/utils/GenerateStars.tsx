type propsType = {
  rating: string | number;
  classes: string;
};
const GenerateStars = (props: propsType) => {
  let { rating, classes } = props;
  let receivedNumber = Number(rating);

  let wholePart = Math.floor(receivedNumber);
  let decimalPart = receivedNumber - wholePart;

  let resultArray = [];

  for (let i = 0; i < 5; i++) {
    if (i < wholePart) {
      resultArray.push(1);
    } else if (i === wholePart && decimalPart > 0) {
      resultArray.push(decimalPart);
    } else {
      resultArray.push(0);
    }
  }

  return (
    <>
      {resultArray.map((ratingNumber) => {
        if (ratingNumber == 1) {
          return (
            <img
              src="/images/icons/full-star.svg"
              alt=""
              key={Math.random()}
              className={classes}
            />
          );
        } else if (ratingNumber == 0) {
          return (
            <img
              src="/images/icons/empty-star.svg"
              alt=""
              key={Math.random()}
              className={classes}
            />
          );
        } else {
          return (
            <img
              src="/images/icons/half-star.svg"
              alt=""
              key={Math.random()}
              className={classes}
            />
          );
        }
      })}
    </>
  );
};

export default GenerateStars;
