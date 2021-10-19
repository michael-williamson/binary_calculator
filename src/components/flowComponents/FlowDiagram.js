import React from "react";
import { Grid, Box } from "@mui/material";

export const FlowDiagram = (props) => {
  const { stateA, stateB, binaryStateObject } = props;
  return (
    <Grid container>
      <Grid container item wrap="nowrap">
        <Grid container item xs={2} direction="column">
          <Grid item>
            <Box
              bgcolor={
                binaryStateObject[stateA] ? "primary.main" : "text.disabled"
              }
            >
              state A
            </Box>
          </Grid>
          <Grid item>
            <Box
              bgcolor={
                binaryStateObject[stateB] ? "primary.main" : "text.disabled"
              }
            >
              state B
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Box
            bgcolor={
              binaryStateObject[stateA] || binaryStateObject[stateB]
                ? "primary.main"
                : "text.disabled"
            }
          >
            OR
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>x or</Box>
        </Grid>
        <Grid item xs={2}>
          <Box>SUM</Box>
        </Grid>
        <Grid container item wrap="nowrap">
          <Grid item xs={2}>
            <Box
              bgcolor={
                binaryStateObject[stateA] && binaryStateObject[stateB]
                  ? "primary.main"
                  : "text.disabled"
              }
            >
              {" "}
              and
            </Box>
          </Grid>
          <Grid item>
            <Box>AND</Box>
          </Grid>
          <Grid item>
            <Box>OR</Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
