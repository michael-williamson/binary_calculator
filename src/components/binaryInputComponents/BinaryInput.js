import React, { useEffect } from "react";
import { Grid, TextField, Switch, Box } from "@mui/material";

export const BinaryInput = (props) => {
  const {
    setBinaryStateObject,
    flowDiagram,
    currentValue,
    correspondingValue,
    name,
    carry,
    powerOfTwo,
  } = props;

  useEffect(() => {
    let xOR = false;
    let firstAND = false;
    let sum = false;
    let secondAND = false;
    xOR =
      (currentValue && correspondingValue) ||
      (currentValue === false && correspondingValue === false)
        ? false
        : true;
    firstAND = currentValue && correspondingValue;
    if (xOR === false && carry) {
      sum = true;
    } else if (carry === false) {
      sum = xOR;
    }
    secondAND = xOR && carry;
    let carryNext = firstAND || secondAND;
    setBinaryStateObject((prev) => {
      return {
        ...prev,
        ...{ [flowDiagram]: { ...prev[flowDiagram], sum: sum } },
        ...{
          [`flowDiagram${parseInt(prev[flowDiagram].index) + 1}`]: {
            ...prev[`flowDiagram${parseInt(prev[flowDiagram].index) + 1}`],
            carry: carryNext,
          },
        },
      };
    });
  }, [
    currentValue,
    correspondingValue,
    carry,
    flowDiagram,
    setBinaryStateObject,
  ]);

  const handleChange = (event) => {
    const checked = event.target.checked;
    setBinaryStateObject((prev) => {
      return {
        ...prev,
        ...{ [flowDiagram]: { ...prev[flowDiagram], [name]: checked } },
      };
    });
  };
  return (
    <Grid item>
      <Box fontWeight="bold" color="secondary.main">
        {powerOfTwo}
      </Box>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={currentValue ? "1" : "0"}
      ></TextField>
      <Switch
        checked={currentValue}
        onChange={handleChange}
        color="secondary"
      ></Switch>
    </Grid>
  );
};
