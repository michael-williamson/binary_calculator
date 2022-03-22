import React from "react";
import { Grid, Box } from "@mui/material";
import { BinaryInput } from "./BinaryInput";

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
  return (
    <Grid
      container
      item
      sx={{
        overflow: { xs: "scroll", sm: "hidden" },
        my: { xs: 3 },
        py: { xs: 3 },
        backgroundColor: "darkgray",
      }}
    >
      <Box sx={{ display: "flex", mb: { xs: 2 }, px: { xs: 3 } }}>
        {outPutInputBinary(
          binaryStateObject,
          setBinaryStateObject,
          "binaryStateA",
          "binaryStateB"
        )}
      </Box>
      <Box
        sx={{
          color: "white",
          fontSize: { xs: 40 },
          fontWeight: "bold",
          textAlign: "center",
          width: { xs: "100%" },
          mb: { xs: 2 },
        }}
      >
        +
      </Box>
      <Box sx={{ display: "flex", mb: { xs: 0 }, px: { xs: 3 } }}>
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
