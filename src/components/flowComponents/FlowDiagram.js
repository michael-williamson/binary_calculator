import React from "react";
import { Grid, Box } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

export const FlowDiagram = (props) => {
  const {
    flowDiagram,
    binaryStateObject: {
      [flowDiagram]: { binaryStateA, binaryStateB, carry, sum },
    },
    column,
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

  const boxAllStyles = {
    border: 1,
    borderRadius: 7,
    borderColor: "primary.main",
    color: "primary.main",
    fontWeight: "bold",
    p: 0.5,
  };

  return (
    <Grid container item>
      <Grid item xs={12}>
        <Box
          fontSize={33}
          fontWeight="bold"
          color="warning.main"
          textAlign="left"
          pl={1}
        >{`Column ${column + 1}:`}</Box>
      </Grid>
      <Grid container item xs={2} direction="column">
        <Grid item>
          <Box
            bgcolor={binaryStateA ? "secondary.main" : "text.disabled"}
            {...boxAllStyles}
          >
            Input A
          </Box>
        </Grid>
        <Grid item>
          <Box
            bgcolor={binaryStateB ? "secondary.main" : "text.disabled"}
            {...boxAllStyles}
          >
            Input B
          </Box>
        </Grid>
      </Grid>
      <Grid container item xs={10}>
        <Grid container item justifyContent="space-around" xs={12}>
          <Grid container item xs={4} justifyContent="space-between">
            <Grid item xs={6}>
              <Box
                bgcolor={
                  firstXOR(binaryStateA, binaryStateB)
                    ? "secondary.main"
                    : "text.disabled"
                }
                {...boxAllStyles}
              >
                <Box>XOR</Box>
              </Box>
            </Grid>
            {firstXOR(binaryStateA, binaryStateB) && (
              <Grid item>
                <Box>
                  <ArrowRightAltIcon color="secondary" />
                </Box>
              </Grid>
            )}
          </Grid>
          <Grid container item xs={4} justifyContent="space-between">
            <Grid item xs={6}>
              <Box
                bgcolor={
                  secondXOR(binaryStateA, binaryStateB, carry)
                    ? "secondary.main"
                    : "text.disabled"
                }
                {...boxAllStyles}
              >
                <Box>XOR</Box>
              </Box>
            </Grid>
            {secondXOR(binaryStateA, binaryStateB, carry) && (
              <Grid item xs={6}>
                <Box>
                  <ArrowRightAltIcon color="secondary" />
                </Box>
              </Grid>
            )}
          </Grid>
          <Grid item xs={2}>
            <Box>{sum ? "1" : "0"}</Box>
          </Grid>
        </Grid>
        <Grid container item justifyContent="space-around" xs={12}>
          <Grid container item xs={4} justifyContent="space-between">
            <Grid item xs={6}>
              <Box
                bgcolor={
                  firstAND(binaryStateA, binaryStateB)
                    ? "secondary.main"
                    : "text.disabled"
                }
                {...boxAllStyles}
              >
                <Box>AND</Box>
              </Box>
            </Grid>
            {firstAND(binaryStateA, binaryStateB) && (
              <Grid item xs={12}>
                <Box>
                  <SubdirectoryArrowRightIcon color="secondary" />
                </Box>
              </Grid>
            )}
            {secondAND(binaryStateA, binaryStateB, carry) && (
              <Grid item xs={2}>
                <Box>
                  <SubdirectoryArrowRightIcon color="secondary" />
                </Box>
              </Grid>
            )}
          </Grid>
          <Grid container item xs={4}>
            <Grid item xs={6}>
              <Box
                bgcolor={
                  secondAND(binaryStateA, binaryStateB, carry)
                    ? "secondary.main"
                    : "text.disabled"
                }
                {...boxAllStyles}
              >
                <Box>AND</Box>
              </Box>
            </Grid>
            {(secondAND(binaryStateA, binaryStateB, carry) ||
              firstAND(binaryStateA, binaryStateB)) && (
              <Grid item xs={6}>
                <Box>
                  <ArrowRightAltIcon color="secondary" />
                </Box>
              </Grid>
            )}
          </Grid>
          <Grid item xs={2}>
            <Box
              bgcolor={
                firstAND(binaryStateA, binaryStateB, carry) ||
                secondAND(binaryStateA, binaryStateB, carry)
                  ? "secondary.main"
                  : "text.disabled"
              }
              {...boxAllStyles}
            >
              <Box>OR</Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {column + 1 > 1 && (
        <Grid item xs={12}>
          <Box
            color="secondary.main"
            fontWeight="bold"
            textAlign="left"
            pl={0.5}
          >
            carry: {carry ? "1" : "0"}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
