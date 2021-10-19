export const binaryUnitStateObject = (params) => {
  const object = {};
  for (let i = 0; i <= 7; i++) {
    object[`binaryStateA${i + 1}`] = false;
    object[`binaryStateB${i + 1}`] = false;
  }
  return object;
};
