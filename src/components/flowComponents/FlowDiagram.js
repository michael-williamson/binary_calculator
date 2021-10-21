import React from "react";
import { Grid, Box } from "@mui/material";

export const FlowDiagram = (props) => {
  const {
    flowDiagram,
    binaryStateObject: {
      [flowDiagram]: { binaryStateA, binaryStateB, carry, sum },
    },
  } = props;

  const firstXOR = (binaryStateA, binaryStateB) => {
    let xOR = false;
    xOR =
      (binaryStateA && binaryStateB) ||
      (binaryStateA === false && binaryStateB === false)
        ? false
        : true;
    return xOR;
  };
  const secondXOR = (binaryStateA, binaryStateB, carry) => {
    let xOR = false;
    xOR =
      (binaryStateA && binaryStateB) ||
      (binaryStateA === false && binaryStateB === false)
        ? false
        : true;

    if (xOR === false && carry) {
      return true;
    } else if (carry === false) {
      return xOR;
    }
  };
  const firstAND = (binaryStateA, binaryStateB) => {
    return binaryStateA && binaryStateB;
  };
  const secondAND = (binaryStateA, binaryStateB, carry) => {
    let xOR = false;
    xOR =
      (binaryStateA && binaryStateB) ||
      (binaryStateA === false && binaryStateB === false)
        ? false
        : true;
    return xOR && carry;
  };

  return (
    <Grid container>
      <Grid container item wrap="nowrap">
        <Grid container item xs={2} direction="column">
          <Grid item>
            <Box bgcolor={binaryStateA ? "secondary.main" : "text.disabled"}>
              state A
            </Box>
          </Grid>
          <Grid item>
            <Box bgcolor={binaryStateB ? "secondary.main" : "text.disabled"}>
              state B
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box color="warning.main" fontWeight="bold">
              carry: {carry ? "1" : "0"}
            </Box>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid container item>
            <Grid item xs={2}>
              <Box
                bgcolor={
                  firstXOR(binaryStateA, binaryStateB)
                    ? "secondary.main"
                    : "text.disabled"
                }
              >
                <Box>XOR</Box>
                <Box>state A or state B equal 1 but not both</Box>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box
                bgcolor={
                  secondXOR(binaryStateA, binaryStateB, carry)
                    ? "secondary.main"
                    : "text.disabled"
                }
              >
                <Box>XOR</Box>
                <Box>1st XOR or Carry equal 1 but not both</Box>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>{sum ? "1" : "0"}</Box>
            </Grid>
          </Grid>
          <Grid>
            <Grid container item wrap="nowrap">
              <Grid item xs={2}>
                <Box
                  bgcolor={
                    firstAND(binaryStateA, binaryStateB)
                      ? "secondary.main"
                      : "text.disabled"
                  }
                >
                  <Box>AND</Box>
                  <Box>state A AND state B equal 1</Box>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box
                  bgcolor={
                    secondAND(binaryStateA, binaryStateB, carry)
                      ? "secondary.main"
                      : "text.disabled"
                  }
                >
                  <Box>AND</Box>
                  <Box>second XOR is true and there is a carry value</Box>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box
                  bgcolor={
                    firstAND(binaryStateA, binaryStateB, carry) ||
                    secondAND(binaryStateA, binaryStateB, carry)
                      ? "secondary.main"
                      : "text.disabled"
                  }
                >
                  <Box>OR</Box>
                  <Box>
                    Either 1st AND is true or 2nd AND is true, A carry value is
                    added to next addition
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
