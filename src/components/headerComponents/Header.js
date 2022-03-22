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
      borderRadius: "81px",
    },
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        py: { xs: 2 },
        px: { xs: 2 },
        background: "linear-gradient(280deg, #ffffff00,#6495edcf, white)",
        border: "5px double white",
        width: { xs: "81%", md: "60%", margin: "0 auto", borderRadius: 1 },
      }}
    >
      <Box
        sx={{
          borderRadius: "81px",
          width: { xs: "100%", md: "84%" },
          margin: "0 auto",
        }}
        className={classes.root}
      >
        <Box
          className={classes.headerText}
          sx={{
            fontSize: 40,
            px: 2,
            py: 4,
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          Binary Calculator
        </Box>
      </Box>
    </Box>
  );
};
