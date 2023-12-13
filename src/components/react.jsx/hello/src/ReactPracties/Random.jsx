import React from "react";

const Random = () => {
  let number = Math.random() * 250;
  return <h1>Random Number is : {Math.round(number)}</h1>;
};

export default Random;
