import React from "react";
import { BinarySum } from "./BinarySum";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import circuitBoardImg from "../../media/circuit_board.jpg";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${circuitBoardImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    isolation: "isolate",
    position: "relative",
  },
  sumText: {
    "&:after": {
      content: "''",
      background: "rgb(0 110 255 / 81%)",
      inset: 0,
      position: "absolute",
      zIndex: -1,
    },
  },
});

export const Sum = (props) => {
  const { binaryStateObject } = props;
  const classes = useStyles();
  return (
    <Box my={2} bgcolor="secondary.main" className={classes.root}>
      <Box
        fontSize={30}
        sx={{ fontSize: { lg: "40px" } }}
        fontWeight="bold"
        color="primary.main"
        className={classes.sumText}
      >
        Sum
      </Box>
      <BinarySum binaryStateObject={binaryStateObject} />
    </Box>
  );
};
