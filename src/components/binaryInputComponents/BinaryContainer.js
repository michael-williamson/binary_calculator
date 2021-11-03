import React from "react";
import { Grid, Box } from "@mui/material";
import { BinaryInput } from "./BinaryInput";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "scroll",
    [theme.breakpoints.up("sm")]: {
      overflow: "hidden",
    },
  },
}));

const outPutInputBinary = (
  binaryStateObject,
  setBinaryStateObject,
  name,
  correspondingValueName
) => {
  const compArray = [];
  for (let i = 7; i >= 0; i--) {
    const flowDiagram = `flowDiagram${i + 1}`;
    const currentValue = binaryStateObject[flowDiagram][name];
    const correspondingValue =
      binaryStateObject[flowDiagram][correspondingValueName];
    const carry = binaryStateObject[flowDiagram].carry;
    compArray.push(
      <BinaryInput
        key={i}
        setBinaryStateObject={setBinaryStateObject}
        currentValue={currentValue}
        correspondingValue={correspondingValue}
        carry={carry}
        flowDiagram={flowDiagram}
        name={name}
        powerOfTwo={Math.pow(2, i)}
      />
    );
  }
  return compArray;
};

export const BinaryContainer = (props) => {
  const { binaryStateObject, setBinaryStateObject } = props;
  const classes = useStyles();
  return (
    <Grid container item className={classes.root}>
      <Box mb={2} display="flex">
        {outPutInputBinary(
          binaryStateObject,
          setBinaryStateObject,
          "binaryStateA",
          "binaryStateB"
        )}
      </Box>
      <Box fontSize={40} fontWeight="bold" textAlign="center" width={1} mb={2}>
        +
      </Box>
      <Box display="flex">
        {outPutInputBinary(
          binaryStateObject,
          setBinaryStateObject,
          "binaryStateB",
          "binaryStateA"
        )}
      </Box>
    </Grid>
  );
};
