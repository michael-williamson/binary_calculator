export const binaryUnitStateObject = (params) => {
  const object = {};
  for (let i = 0; i <= 7; i++) {
    object[`flowDiagram${i + 1}`] = {
      binaryStateA: false,
      binaryStateB: false,
      sum: false,
      carry: false,
      index: i + 1,
    };
    if (i === 7)
      object[`flowDiagram${i + 2}`] = {
        carry: false,
      };
  }
  return object;
};
