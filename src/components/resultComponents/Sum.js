import React from "react";
import { BinarySum } from "./BinarySum";
import { Box } from "@mui/system";

export const Sum = (props) => {
  const { binaryStateObject } = props;
  return (
    <Box my={2} bgcolor="secondary.main">
      <Box fontSize={30} fontWeight="bold">
        Sum
      </Box>
      <BinarySum binaryStateObject={binaryStateObject} />
    </Box>
  );
};
