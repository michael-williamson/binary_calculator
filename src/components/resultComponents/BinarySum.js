import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";

export const BinarySum = (props) => {
  const { binaryStateObject } = props;
  const [binaryString, setBinaryString] = useState("");
  useEffect(() => {
    const arr = [];
    let carry = binaryStateObject.flowDiagram9.carry ? 1 : 0;
    arr.push(carry);
    for (let i = 8; i >= 1; i--) {
      let sum = binaryStateObject[`flowDiagram${i}`].sum ? 1 : 0;
      arr.push(sum);
    }
    setBinaryString(arr.join(""));
  }, [binaryStateObject]);
  return (
    <Box
      display="flex"
      py={2}
      px={2}
      justifyContent="space-between"
      color="primary.main"
    >
      <Box>
        <Box>Binary Form:</Box>
        <Box>{binaryString}</Box>
      </Box>
      <Box px={4}>or</Box>
      <Box>
        <Box>Base 10 Form:</Box>
        <Box textAlign="right">{parseInt(binaryString, 2).toString()}</Box>
      </Box>
    </Box>
  );
};
