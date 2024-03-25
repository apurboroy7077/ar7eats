import React from "react";

const WaitingFunction = (waitingTime: number) => {
  let givenTimeInMiliSeconds = waitingTime * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${waitingTime} Second is Over.`);
    }, givenTimeInMiliSeconds);
  });
};

export default WaitingFunction;
