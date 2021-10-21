import React from "react";
import { BinarySum } from "./BinarySum";
import { Box } from "@mui/system";

export const Sum = (props) => {
  const { binaryStateObject } = props;
  return (
    <Box fontSize={50} my={2}>
      Sum
      <BinarySum binaryStateObject={binaryStateObject} />
    </Box>
  );
};
