import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import oneZerosImg from "../../media/ones_zeros.jpg";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${oneZerosImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    isolation: "isolate",
    position: "relative",
  },
  headerText: {
    "&:after": {
      content: "''",
      background: "rgb(0 110 255 / 81%)",
      inset: 0,
      position: "absolute",
      zIndex: -1,
    },
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <Box width={1} mb={2} className={classes.root}>
      <Box
        fontSize={40}
        px={2}
        py={4}
        color="primary.main"
        fontWeight="bold"
        className={classes.headerText}
      >
        Binary Calculator
      </Box>
    </Box>
  );
};
