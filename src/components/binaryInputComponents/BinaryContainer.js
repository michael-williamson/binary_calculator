import React from "react";
import { Grid } from "@mui/material";
import { BinaryInput } from "./BinaryInput";

export const BinaryContainer = (props) => {
  const { binaryStateObject, setBinaryStateObject } = props;
  const outPutInputBinaryA = () => {
    let counter = 0;
    const compArray = [];
    for (let i = 7; i >= 0; i--) {
      counter++;

      compArray.push(
        <BinaryInput
          inputState={binaryStateObject}
          setInputState={setBinaryStateObject}
          name={`binaryStateA${counter}`}
        />
      );
    }
    return compArray;
  };
  const outPutInputBinaryB = () => {
    let counter = 0;
    const compArray = [];
    for (let i = 7; i >= 0; i--) {
      counter++;
      compArray.push(
        <BinaryInput
          inputState={binaryStateObject}
          setInputState={setBinaryStateObject}
          name={`binaryStateB${counter}`}
        />
      );
    }
    return compArray;
  };
  return (
    <Grid container item>
      <Grid container item wrap="nowrap">
        {outPutInputBinaryA()}
      </Grid>
      <Grid container item wrap="nowrap">
        {outPutInputBinaryB()}
      </Grid>
    </Grid>
  );
};
