export const sumUpdate = (params) => {};

export const sumUpdater = (
  inputState,
  name,
  flowDiagram,
  checked,
  totalSum,
  setTotalSum
) => {
  const { binaryStateA, binaryStateB, carry } = inputState[flowDiagram];
  let xOR = false;
  let firstAND = false;
  let sum = false;
  let secondAND = false;
  xOR =
    (checked && binaryStateA === false && binaryStateB === false) ||
    (checked === false && binaryStateA && binaryStateB);
  //***xOR is true if either a or b are true
  console.log(`xOR`, xOR);
  firstAND = xOR === false && checked;
  console.log(firstAND, "firstAND");
  //***if xOR is false=0 carry=true=1
  //***only two cases where sum can be true otherwise initial value false
  if (xOR === false && carry) {
    sum = true;
  } else if (carry === false) {
    sum = xOR;
  }
  console.log(sum, "sum");
  secondAND = xOR && carry;
  let carryNext = firstAND || secondAND;
  let carryNextSum =
    inputState[flowDiagram].index < 8 &&
    inputState[`flowDiagram${parseInt(inputState[flowDiagram].index) + 1}`]
      .binaryStateA === false &&
    inputState[`flowDiagram${parseInt(inputState[flowDiagram].index) + 1}`]
      .binaryStateB === false &&
    carryNext;
  if (inputState[flowDiagram].index >= 8) {
    //***ninth binary position to account for carry from eighth position
    //***only condition for ninth to have positive sum is that it receives a carry
    carryNextSum = carryNext;
  }

  console.log(flowDiagram, "flow");

  setTotalSum((prev) => {
    return {
      ...prev,
      [flowDiagram]: sum ? 1 : 0,
      [`flowDiagram${parseInt(inputState[flowDiagram].index) + 1}`]:
        carryNextSum
          ? 1
          : prev[`flowDiagram${parseInt(inputState[flowDiagram].index) + 1}`],
    };
  });

  if (inputState[flowDiagram].index >= 8) {
    return {
      [flowDiagram]: { ...inputState[flowDiagram], [name]: checked, sum: sum },
    };
  }

  return {
    [flowDiagram]: { ...inputState[flowDiagram], [name]: checked, sum: sum },
    [`flowDiagram${parseInt(inputState[flowDiagram].index) + 1}`]: {
      ...inputState[
        `flowDiagram${parseInt(inputState[flowDiagram].index) + 1}`
      ],

      carry: carryNext,
    },
  };
};
